const express = require('express')
const { setNewUser, selectUserUid,updateRecords,pullRecords } = require("./db/userInfo.js");
let jwt = require('jwt-simple')

let router = express.Router()

router.post('/login', async function(req, res){
  let user = {};
  req.on('data', chunk => {
    console.log(JSON.parse(chunk.toString()));
    user = JSON.parse(chunk.toString());
  })
  req.on('end',async ()=>{
    try {
      var result = await selectUserUid(user.uid,user.password);
      console.log(result)
      if(result[0].uid == 'undefined'){
        throw "未查到用户"
      }
      const token = jwt.encode({
        uid: result[0].uid,
        time: Date.now()
      }, 'secret')
      let json = ({
        status: 200,
        token: token,
        data:{
          'uid': result[0].uid,
        },
        msg: "注册成功"
      })
      res.status(200).send(json);
   } catch (error) {
     console.log("login",error)
     res.status(501).send(error)
   }
  })
  
});

router.get('/getUserInfo', async function(req, res) {
  try {
    let user = jwt.decode('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxMjM0IiwidXNlcm5hbWUiOiJicyJ9.05LUeGU41ha4jJbEuKBTASHxjBl6sXW3OUXbr0ac9IA', 'secret');
    console.log(user)
    let result = await selectUserUid(user.uid);
    console.log(result)
    res.status(200).send(JSON.stringify(result));
 } catch (error) {
   console.log("getUserInfo",error)
   res.status(501).send(error)
 }
});

router.post('/backups',async function (req, res) {
  var records = undefined;
  var token = jwt.decode(req.headers.authorization,'secret');
  console.log(token.uid)
  req.on('data',chunk=>{
    console.log(chunk.toString())
    records = chunk.toString()
  })
  req.on('end',async ()=>{
    try {
      let result = await updateRecords(token.uid,records)
      console.log(result)
      let json = ({
        status: 200,
        data:{
        },
        msg: "注册成功"
      })
      res.status(200).send(json);
    } catch (error) {
      console.error("login",error)
      res.status(501).send(error)
    }
  })
})
router.post('/pull',async function (req, res) {
  var records = undefined;
  var token = jwt.decode(req.headers.authorization,'secret');
  console.log(token.uid)
  req.on('data',chunk=>{
    console.log(chunk.toString())
    records = chunk.toString()
  })
  req.on('end',async ()=>{
    try {
      let result = await pullRecords(token.uid)
      console.log(result[0].noteList)
      let json = ({
        status: 200,
        data:{
          noteList:JSON.parse(result[0].noteList)
        },
        msg: "注册成功"
      })
      res.status(200).send(json);
    } catch (error) {
      console.error("login",error)
      res.status(501).send(error)
    }
  })
})

router.post('/register',async function (req, res) {
  var user = undefined
  req.on('data', chunk => {
    console.log(chunk.toString())
    user = JSON.parse(chunk.toString())
  })

  req.on('end',async ()=>{
    try {
      let result = await setNewUser(user);
      res.status(200).send(result)
    } catch (error) {
      console.error(error);
      res.status(501).send(error)
    }
  })
  
  
})

module.exports = router