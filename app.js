// const express = require("express");
// //임포트해오는 것
// const app = express();
// //함수로써 쓰기 위해 담은것

// const port = 3010;
// //리엑트는 3000번 익스프레스 안겹치게 설정 해줘야함

// app.get("/", (req, res) => {
//   res.send("hello, express");
// });
// //req프론트 엔드가 담아 보내준 것 그 답이 res

// app.post("/", (req, res) => {
//   res.send("This is Post Request");
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
// //첫번쩨 요청 포트 , 두번째 실행되어야하는 것

const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.post("/", (req, res) => {
  res.json("This is Post Request");
});
app.put("/", (req, res) => {
  res.json("This is put");
});
app.delete("/", (req, res) => {
  res.json("This is delete");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
