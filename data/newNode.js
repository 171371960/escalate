var fs = require("fs");
// fs.writeFile("./files.txt", "写入文字", function(error) {
//   console.log("写入成功");
// });
fs.readFile("./files.txt", function(error, data) {
  if (error) {
    console.log("读取失败");
  } else {
    console.log(data.toString());
    fs.writeFile("./files.txt", "我想要写入的文字", function(errorData) {
      if (errorData) {
        console.log(1);
      } else {
        console.log("写入成功");
      }
    });
  }
});
