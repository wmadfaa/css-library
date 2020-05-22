const { watch, series } = require("gulp");
const { buildStyles, cleanDist, paths } = require("@css-library/scripts");

const _buildStyles = buildStyles([]);

exports.buildStyles = _buildStyles;

exports.build = series(cleanDist, _buildStyles);

exports.watch = function (cb) {
  watch(paths.STYLES_INPUT_PATH, _buildStyles);
  cb();
};