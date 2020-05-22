const { src, dest } = require("gulp");
const header = require("gulp-header");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const fiber = require("fibers");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const minify = require("cssnano");
const paths = require("../paths");

const { banner } = require("../common");

sass.compiler = require("sass");

module.exports = function (exclude_paths = []) {
  return function compileStyles(cb) {
    console.log(paths.ROOT_NODE_MODULES);
    src([paths.STYLES_INPUT_PATH, ...paths.STYLES_EXCLUDE_PATHS, ...exclude_paths])
      .pipe(sourcemaps.init())
      .pipe(sass({ fiber, includePaths: [paths.ROOT_NODE_MODULES, "node_modules"] }).on("error", sass.logError))
      .pipe(sourcemaps.write())
      .pipe(postcss([autoprefixer()]))
      .pipe(
        header(banner.main, {
          package: require(paths.MODULE_PACKAGE_JSON_FILE),
        })
      )
      .pipe(dest(paths.STYLES_OUTPUT_PATH))
      .pipe(rename({ suffix: ".min" }))
      .pipe(
        postcss([
          minify({
            discardComments: {
              removeAll: true,
            },
          }),
        ])
      )
      .pipe(dest(paths.STYLES_OUTPUT_PATH));
    cb();
  };
};
