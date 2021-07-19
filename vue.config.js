module.exports = {
  chainWebpack: (config) => {
    config.entry("app")
    .add("./src/styles/_animations.scss")
    .add("./src/styles/_fonts.scss")
    .add("./src/styles/_reset.scss")
    .add("./src/styles/_variables.scss")
      .end();
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss";`,
      },
    },
    extract: {
      filename: "[name].css", // to have a name related to a theme
      chunkFilename: "css/[name].css",
    },
    modules: false,
    sourceMap: true,
  },
};
