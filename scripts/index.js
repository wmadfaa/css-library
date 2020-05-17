const { cleanDist } = require("./src/common.scripts");

exports.TemplateGeneratorPlugin = require("./plugins/gulp-template-generator");
exports.buildStyles = require("./src/styles.script");
exports.cleanDist = cleanDist;
exports.paths = require("./paths");
