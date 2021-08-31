var express = require("express");
var minify = require("express-minify");
var minifyHTML = require("express-minify-html");
express.static.mime.define({ "text/x-scss": ["scss"] });
var app = express();
app.use(minifyHTML());
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);
app.get("/", function (req, res) {
  res.render("index", {}, function (err, html) {
    res.send(err || html);
  });
});
app.use(minify({ sass_match: /css/ }));
app.get("/main.css", function (req, res) {
  req.url = "/main.scss";
  app.handle(req, res);
});
app.use("/main.scss", express.static(__dirname + "/main.scss"));
app.use("/main.js", express.static(__dirname + "/main.js"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/favicon.ico", express.static(__dirname + "/assets/favicon.ico"));
app.use(
  "/apple-touch-icon.png",
  express.static(__dirname + "/assets/apple-touch-icon.png")
);
app.listen(3000);
console.debug("Server running at http://localhost:3000");
