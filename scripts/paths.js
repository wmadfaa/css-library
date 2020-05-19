const path = require("path");

const CWD = process.cwd();

const MODULE_PACKAGE_JSON_FILE = path.resolve(CWD, "./package.json");

const STYLES_INPUT_PATH = path.resolve(CWD, "./**/*.scss");
const STYLES_EXCLUDE_PATHS = [`!${path.resolve(CWD, "./**/*.import.scss")}`, `!${path.resolve(CWD, "./**/_*.scss")}`];
const STYLES_OUTPUT_PATH = path.resolve(CWD, "./dist/");

module.exports = {
  CWD,
  MODULE_PACKAGE_JSON_FILE,
  STYLES_INPUT_PATH,
  STYLES_EXCLUDE_PATHS,
  STYLES_OUTPUT_PATH,
};
