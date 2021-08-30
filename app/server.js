var express = require("express");
var minify = require("express-minify");
var minifyHTML = require("express-minify-html");
express.static.mime.define({
  "text/x-scss": ["scss"],
});

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
app.get("/styles/main.css", function (req, res) {
  req.url = "/styles/main.scss";
  app.handle(req, res);
});
app.use(function (req, res, next) {
  if (/styles\/main\.scss$/.test(req.url)) {
    res.minifyOptions = res.minifyOptions || {};
    res.minifyOptions.sass = { includePaths: ["./styles"] };
  }
  next();
});
app.use("/styles", express.static(__dirname + "/styles"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/favicon.ico", express.static(__dirname + "/favicon.ico"));
app.use(
  "/apple-touch-icon.png",
  express.static(__dirname + "/apple-touch-icon.png")
);

app.listen(3000);
console.debug("Server running at http://localhost:3000");
