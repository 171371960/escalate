var http = require("http");
var server = http.createServer();

var ht = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
   

    <title> 第4个项目</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            background-color:cornflowerblue;
        }

        a:hover {
            background-color: brown
        }
    </style>
</head>
 <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
<body>
    a标签是 超连接标签,可以跳转页面 和访问资源 <br>
    a:link {color: #FF0000} /* 未访问的链接 */ <br>
    a:visited {color: #00FF00} /* 已访问的链接 */ <br>
    a:hover {color: #FF00FF} /* 鼠标移动到链接上 */ <br>
    a:active {color: #0000FF} /* 选定的链接 */ <br>

    <a href="https://www.baidu.com" target="">跳转</a> <br>鼠标
    在css中 :hover 表示鼠标悬浮在链接上触发的 样式 最常用就是这个
</body>
<script>

</script>

</html>`;

server.on("request", function(request, response) {
  console.log("收到");
  console.log(request.url);

  if (request.url === "/a") {
    response.write(ht);
  } else if (request.url === "/b") {
    response.write("world");
  }

  response.end("");
});
server.listen(9999, function() {
  console.log("111111111111111111111111111111111111111成功");
});
