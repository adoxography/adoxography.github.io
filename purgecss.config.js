module.exports = {
  content: ['./_site/**/*.html'],
  css: ['./_site/css/site.css'],
  defaultExtractor: content => content.match(/[A-Za-z\d-_:/]+/g) || []
};
