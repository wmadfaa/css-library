const del = require("del");
const paths = require("../paths");

exports.cleanDist = function (cd) {
  del.sync([paths.STYLES_OUTPUT_PATH]);
  cd();
};
