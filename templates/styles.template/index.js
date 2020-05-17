const path = require("path");
const exec = require("child_process").exec;
const { src, dest } = require("gulp");
const { TemplateGeneratorPlugin } = require("@css-library/scripts");
const questions = require("./template.questions");

module.exports = function (cb) {
  const stream = src(path.resolve(__dirname, "./template/**/*.js"))
    .pipe(TemplateGeneratorPlugin(questions))
    .pipe(dest(path.resolve(process.cwd(), "./packages")));

  stream.on("end", () => {
    exec("yarn install", function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  });
  cb();
};
