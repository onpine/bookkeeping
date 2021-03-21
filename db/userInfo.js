const queryPromise  = require("./connection.js")

exports.setUserInfo = function(data){
  const sql = `INSERT INTO user_info (uid, username, sex, age, bgimage) VALUES ('${data.uid}', '${data.name}', ${data.sex}, ${data.age}, '${data.bgimage}')`;
  return queryPromise(sql)
}

exports.updateUserInfo = function(){
  const sql = "UPDATE user_info SET sex = 2, age = 23 WHERE uid = 0002";
  return queryPromise(sql)
}

exports.selectAllUser = function () {
  const sql = 'SELECT * FROM user_info';
  return queryPromise(sql)
}

exports.selectUser = function (uid) {
  const sql = `SELECT * FROM user_info WHERE uid = '${uid}'`;
  return queryPromise(sql)
}