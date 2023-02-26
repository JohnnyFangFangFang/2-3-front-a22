// 設定 express
const express = require("express");
const app = express();
const port = 3000;

// 設定 handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 設定靜態檔案
app.use(express.static("public"));

// 設定路由會用到的變數
let title = "";
let active1 = "";
let active2 = "";
let active3 = "";

// 設定路由
app.get("/", (req, res) => {
  res.render("index", { title: "首頁" });
});

app.get("/about", (req, res) => {
  res.render("index", { title: "About", active1: "active" });
});

app.get("/portfolio", (req, res) => {
  res.render("index", { title: "Portfolio", active2: "active" });
});

app.get("/contact", (req, res) => {
  res.render("index", { title: "Contact", active3: "active" });
});

// 設定伺服器監聽
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});

// 按鈕變色的邏輯暫時寫在這 => 在 Node.js 無法直接操作 DOM
// const header = document.querySelector("header");

// header.addEventListener("click", function onHeaderClicked(event) {
//   // 按過的按鈕要恢復原狀
//   if (header.firstElementChild.classList.contains("active")) {
//     header.firstElementChild.classList.remove("active");
//   }

//   header.lastElementChild.childNodes.forEach((e) => {
//     if (e.classList.contains("active")) {
//       e.classList.remove("active");
//     }
//   });

//   // 讓這次點擊的按鈕變色
//   event.target.classList.add("active");
// });
