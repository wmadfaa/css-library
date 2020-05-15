const path = require("path");
const { src, dest } = require("gulp");
// const prompt = require("gulp-prompt");
const through = require("through2");

function plugin() {
  let x = null;

  return through.obj(function (file, encoding, cb) {
    let err = null;
    if (!x) {
      x = file.path;
    }
    if (path.extname(file.path) === ".js") {
      require(file.path)();
    }
    // console.log(file.contents.toString());
    cb(err, file);
  });
}

function generate(cb) {
  src("templates/**/*.*(json|js)").pipe(plugin()).pipe(dest("dest"));
  cb();
}

exports.generate = generate;
