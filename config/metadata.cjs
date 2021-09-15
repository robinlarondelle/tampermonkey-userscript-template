const { author, dependencies, repository, version } = require('../package.json')

module.exports = {
  name: 'webpack-userscript-template',
  namespace: 'https://trim21.me/',
  version: version,
  author: author,
  source: repository.url,
  // 'license': 'MIT',
  match: [
    'http://www.example.com/*'
  ],
  require: [],
  grant: [
    'GM.xmlHttpRequest'
  ],
  connect: [
    'httpbin.org'
  ],
  'run-at': 'document-end'
}
