const path = require('path')

module.exports = {
  process(_src, filename) {
    const name = path.relative(path.resolve(), filename)
    return `module.exports = ${JSON.stringify(name)};`
  },
}
