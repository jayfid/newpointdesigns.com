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

app.use(minify({}));
app.use("/styles", express.static(__dirname + "/app/styles"));
app.use("/scripts", express.static(__dirname + "/app/scripts"));
app.use("/images", express.static(__dirname + "/app/images"));
app.use("/favicon.ico", express.static(__dirname + "/app/favicon.ico"));
app.use(
  "/apple-touch-icon.png",
  express.static(__dirname + "/app/apple-touch-icon.png")
);

app.listen(3000);
console.debug("Server running at http://localhost:3000");
