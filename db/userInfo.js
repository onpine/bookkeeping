const queryPromise  = require("./connection.js")

exports.setNewUser = function(data){
  const sql = `INSERT INTO user_info (uid, password) VALUES ('${data.uid}', '${data.password}')`;
  return queryPromise(sql)
}

exports.updateRecords = function(uid,records){
  const sql = `UPDATE user_info SET noteList = '${records}' WHERE uid = '${uid}'`;
  return queryPromise(sql)
}

exports.pullRecords = function(uid){
  const sql = `SELECT noteList FROM user_info WHERE uid = '${uid}'`;
  return queryPromise(sql)
}

exports.selectAllUser = function () {
  const sql = 'SELECT * FROM user_info';
  return queryPromise(sql)
}

exports.selectUserUid = function (uid) {
  const sql = `SELECT * FROM user_info WHERE uid = '${uid}'`;
  return queryPromise(sql)
}

exports.checkUser = function (uid, password) {
  const sql = `SELECT * FROM user_info WHERE uid = '${uid}',password = '${password}'`;
  return queryPromise(sql)
}