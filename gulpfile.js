"use strict";

/* Load Gulp and plugins */
const { series, parallel, watch, src, dest } = require("gulp"),
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	autoprefixer = require("gulp-autoprefixer"),
	uglify = require("gulp-uglify"),
	log = require("fancy-log"),
	del = require("del"),
	browserSync = require("browser-sync").create(),

	siteURL = "localhost", // for browser-sync

	/** JS source files to concatenate and uglify */
	uglifySrc = [
		"assets/js/scripts.js"
	],
	/** CSS source files to concatenate and minify */
	cssminSrc = [
		"assets/css/style.scss"
	];


/** Styles - SASS, autoprefix & minify */
function styles() {
	return src(cssminSrc)
		.pipe(sourcemaps.init({ loadMaps: true })) // Loads existing sourcemaps too
		.pipe(concat("style.min.scss"))
		.pipe(sass({
			outputStyle: 'compressed' // minifies style.min.css
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: [ // https://github.com/ai/browserslist#queries
				'last 2 versions',
				'> 5%',
				'ie >= 9',
				'ie_mob >= 10',
				'ff >= 30',
				'chrome >= 34',
				'safari >= 7',
				'opera >= 23',
				'ios >= 7',
				'android >= 4',
				'bb >= 10'
			]
		}))
		.pipe(sourcemaps.write('/', { // write style.min.css.map to same directory as style.min.css
			includeContent: false,
			sourceRoot: '../assets/css' // relative to minified output location
		}))
		.pipe(dest("dist"))
		.pipe(browserSync.stream());
};

/** Uglify */
function scripts() {
	return src(uglifySrc)
		.pipe(concat("scripts.min.js"))
		.pipe(uglify())
		.pipe(dest("dist"))
		.pipe(browserSync.stream());
};

/** Browser-sync */
function browser_sync() {
	browserSync.init({
		proxy: siteURL,
	});
};

function watchForChanges() {

	log("Watching changes...");

	/** Watch for JS files */
	watch([
		"assets/js/*.js"
	], scripts);

	/** Watch for SASS */
	watch([
		"assets/css/style.scss"
	], styles);

};

/** Clean */
function clean() {
	return del([".tmp", "dist"]);
};


exports.watch = series(parallel(scripts, styles), watchForChanges);
exports.build = series(clean, parallel(styles, scripts));
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browser_sync;
exports.clean = clean;
exports.default = exports.watch;