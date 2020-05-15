const PluginError = require("plugin-error");
const Vinyl = require("vinyl");
const through = require("through2");
const inquirer = require("inquirer");

function plugin(questions, defaultOptions = {}) {
  const prompt = inquirer.createPromptModule();
  let options = null;

  return through.obj(async function (file, _, cb) {
    const relativePath = file.base.replace(file.cwd, "");

    try {
      let res = null;
      if (options === null) {
        const answers = await prompt(questions);
        options = { ...defaultOptions, ...answers };
      }

      if (file.extname === ".js") {
        const outPath = file.path
          .replace(relativePath, `/${options.package_name}`)
          .replace(/\.js$/, "");
        const content = require(file.path)(options);
        res = new Vinyl({
          path: outPath,
          contents: new Buffer.from(content),
        });
      }

      cb(null, res);
    } catch (err) {
      if (err.isTtyError) {
        cb(
          new PluginError(
            "gulp-template-generator",
            "Prompt couldn't be rendered in the current environment"
          )
        );
      } else {
        cb(err);
      }
    }
  });
}

module.exports = plugin;
