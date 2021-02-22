module.exports = {
  type: "react-component",
  npm: {
    esModules: false,
    umd: {
      global: "EbsForm",
      externals: {
        react: "React",
        "@babel/plugin-transform-runtime": "@babel/plugin-transform-runtime",
        "@babel/runtime": "@babel/runtime",
        "babel-runtime": "babel-runtime",
      },
    },
  },
};
