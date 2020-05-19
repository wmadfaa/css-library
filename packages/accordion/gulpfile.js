const { watch, series } = require("gulp");
const { buildStyles, cleanDist, paths } = require("@css-library/scripts");

const _buildStyles = buildStyles([]);

exports.buildStyles = buildStyles;

exports.build = series(cleanDist, buildStyles);

exports.watch = function (cb) {
  watch(paths.STYLES_INPUT_PATH, buildStyles);
  cb();
};