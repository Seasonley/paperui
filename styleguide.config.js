const path = require("path");
const vueLoader = require("vue-loader");
module.exports = {
  // set your styleguidist configuration here
  title: "PaperUI Style Guide",
  //   components: "src/components/**/[A-Z]*.vue",
  defaultExample: true,
  require: [path.join(__dirname, "./src/PaperUI.scss")],
  ribbon: {
    text: "View On Github",
    url: "https://github.com/Seasonley/paperui"
  },
  sections: [
    {
      name: "Basic",
      components: ["src/components/Button.vue", "src/components/Progress.vue"]
    },
    {
      name: "Form",
      components: [
        "src/components/Input.vue",
        "src/components/Check.vue",
        "src/components/Radio.vue",
        "src/components/Rate.vue",
        "src/components/Slider.vue",
        "src/components/Upload.vue"
      ]
    },
    {
      name: "Window",
      components: ["src/components/Tabs.vue"]
    },
    {
      name: "Layout",
      components: ["src/components/Group.vue"]
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {
              scss: ["vue-style-loader", "css-loader", "sass-loader"]
            }
          }
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loader: "style-loader!css-loader!sass-loader"
        }
      ]
    },
    plugins: [new vueLoader.VueLoaderPlugin()]
  },
  usageMode: "expand",
  exampleMode: "expand",
  styleguideDir: "dist"
};
