// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("d:/git/cv/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("d:\\git\\cv\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("d:\\git\\cv\\src\\pages\\index.js"))
}

exports.json = {
  "layout-index.json": require("d:\\git\\cv\\.cache\\json\\layout-index.json"),
  "404.json": require("d:\\git\\cv\\.cache\\json\\404.json"),
  "404-html.json": require("d:\\git\\cv\\.cache\\json\\404-html.json"),
  "index.json": require("d:\\git\\cv\\.cache\\json\\index.json")
}