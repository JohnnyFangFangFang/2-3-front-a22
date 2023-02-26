// 設定 express
const express = require("express");
const app = express();
const port = 3000;

// 設定 handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定路由
app.get("/", (req, res) => {
  res.render("index");
});

// 設定伺服器監聽
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
