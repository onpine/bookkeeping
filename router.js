const express = require('express')
const { setUserInfo, selectUser } = require("./db/userInfo.js");
let jwt = require('jwt-simple')

let router = express.Router()

router.post('/login', async function(req, res){
  res.setHeader('Access-Control-Allow-Orgin', '*') // 允许的域名
  res.setHeader('Access-Control-Allow-headers', 'Content-Type,Authorization') // 允许的请求头
  res.setHeader('Access-Control_Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS')
  console.log(req)
  try {
    var result = await selectUser("1234");
    console.log(JSON.stringify(result))
    const token = jwt.encode({
      uid: result[0].uid,
      username: result[0].username
    }, 'secret')
    let json = ({
      status: 200,
      token: token,
      data:{
        'uid': result[0].uid,
        'name': result[0].username,
        'sex': result[0].sex ? "男" : "女",
        'age': result[0].age
      },
      msg: "注册成功"
    })
    res.status(200).send(json);
 } catch (error) {
   console.log("getUserInfo",error)
   res.status(501).send(error)
 }
});

router.get('/getUserInfo', async function(req, res) {
  try {
    let user = jwt.decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjM0IiwidXNlcm5hbWUiOiJicyJ9.05LUeGU41ha4jJbEuKBTASHxjBl6sXW3OUXbr0ac9IA', 'secret');
    console.log(user)
    let result = await selectUser(user.uid);
    console.log(result)
    res.status(200).send(JSON.stringify(result));
 } catch (error) {
   console.log("getUserInfo",error)
   res.status(501).send(error)
 }
});

router.get('/rigister',async function (req, res) {
  try {
    let result = await setUserInfo({uid: '1284', name: "bs", sex: 1, age: '20', bgimage: 'href'});
    res.status(200).send(result)
  } catch (error) {
    console.error(error);
    res.status(501).send(error)
  }
  
})

module.exports = router