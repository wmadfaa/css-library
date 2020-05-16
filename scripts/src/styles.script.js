const path = require("path");
const { src, dest } = require("gulp");
const header = require("gulp-header");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const fiber = require("fibers");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const minify = require("cssnano");

const { banner } = require("../common");

sass.compiler = require("sass");

const CWD = process.cwd();

const INPUT_PATH = path.resolve(CWD, "./**/*.scss");
const OUTPUT_PATH = path.resolve(CWD, "./dist/");

module.exports = function (cb) {
  src(INPUT_PATH)
    .pipe(sourcemaps.init())
    .pipe(sass({ fiber }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss([autoprefixer()]))
    .pipe(
      header(banner.main, {
        package: require(path.resolve(CWD, "./package.json")),
      })
    )
    .pipe(dest(OUTPUT_PATH))
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
    .pipe(dest(OUTPUT_PATH));
  cb();
};
