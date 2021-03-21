const mysql = require('mysql');
let connection = mysql.createConnection({
  host     : '112.124.30.43',
  user     : 'root',
  password : 'onpine',
  database : 'cashbook'
});
connection.connect();

function queryPromise(sql) {
  return new Promise(function (resolve,reject){
    connection.query(sql, function(error, results){
      if(error) {
       reject(error.sqlMessage);
      }else{
        resolve(results);
      }
    })
  }).then(result => {
    return result;
  }).catch(error => {
    throw error;
  })
}

module.exports = queryPromise;