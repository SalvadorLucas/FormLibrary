module.exports = {
  type: 'react-component',
  npm: {
    esModules: false,
    umd: {
      global: 'EbsForm',
      externals: {
        react: 'React'
      }
    }
  }
}
