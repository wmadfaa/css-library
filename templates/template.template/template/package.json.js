module.exports = function (options) {
  return `{
  "name": "@css-library/${options.package_name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "private": true,
  "author": {
    "name": "Wasim Almadfaa",
    "email": "wm.madfaa@gmail.com"
  },
  "license": "ISC",
  "dependencies": {
    "@css-library/scripts": "1.0.0",
    "gulp": "^4.0.2"
  }
}
`;
};
