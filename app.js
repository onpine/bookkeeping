const http = require("http")
const express = require('express')
const router = require('./router')

const port = 3000;
const hostname = "localhost"

const app  = express();

// 处理跨域， 使用cors实现
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-headers', 'Content-Type,Authorization') // 允许的请求头
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS')
  if (req.method === 'OPTIONS') {
    res.status(200).send()
  } else {
    next()
  }
})

app.use(router);

app.listen(port, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})