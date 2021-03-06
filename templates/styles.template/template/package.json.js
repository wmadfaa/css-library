module.exports = function (options) {
  return `{
  "name": "@css-library/${options.package_name}",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "main": "dist/index.min.css",
  "scripts": {
    "build": "gulp build",
    "watch": "gulp watch"
  },
  "author": {
    "name": "Wasim Almadfaa",
    "email": "wm.madfaa@gmail.com"
  },
  "repository": {
    "url": "https://github.com/wmadfaa/css-library/test-styles"
  },
  "license": "ISC",
  "browserslist": [
    "last 2 version"
  ],
  "devDependencies": {
    "@css-library/scripts": "1.0.0",
    "gulp": "^4.0.2"
  }
}`;
};
