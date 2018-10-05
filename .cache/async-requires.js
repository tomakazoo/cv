// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!d:\\git\\cv\\src\\pages\\404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!d:\\git\\cv\\src\\pages\\index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!d:\\git\\cv\\.cache\\json\\layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!d:\\git\\cv\\.cache\\json\\404.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!d:\\git\\cv\\.cache\\json\\404-html.json"),
  "index.json": require("gatsby-module-loader?name=path---index!d:\\git\\cv\\.cache\\json\\index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!d:/git/cv/.cache/layouts/index.js")
}