module.exports = function () {
  return `module.exports = function (options) {
  return \`{
  "name": "@css-library/\${options.package_name}",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "author": {
    "name": "Wasim Almadfaa",
    "email": "wm.madfaa@gmail.com"
  },
  "license": "ISC",
  "devDependencies": {
    "@css-library/scripts": "1.0.0"
  }
}
\`;
};
`;
};
