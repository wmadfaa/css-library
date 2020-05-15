module.exports = function () {
  return `const path = require("path");
const { src, dest } = require("gulp");
const { TemplateGeneratorPlugin } = require("@css-library/scripts");
const questions = require("./template.questions");

module.exports = function (cb) {
  src(path.resolve(__dirname, "./template/**/*.js"))
    .pipe(TemplateGeneratorPlugin(questions))
    .pipe(dest(path.resolve(process.cwd(), "./packages")));
  cb();
};
`;
};
