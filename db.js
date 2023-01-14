const Database = require("@replit/database");
const db = new Database();


// if (verifyKey([userData.name] + [userData.id]) === false) {
//   DB_SET([userData.name] + [userData.id], [userData]);
// }
// else { console.log("user verified"); }

//adding data
// console.log(process.env.REPLIT_DB_URL);

async function DB_SET(key, value) {
  await db.set(key, value);
  console.log("SET: " + key);
}

async function DB_GET(key) {
  var data = await db.get(key);
  console.log("GET: " + key + " : " + data);
}

async function DB_DELETE(key) {
  await db.delete(key);
}

async function verifyKey(key) {
  if (DB_GET(key) === null || DB_GET(key) === undefined || DB_GET(key) === "") {
    return false;
  }
  else return true;
}

async function DB_LIST() {
  let keys = await db.list();
  console.log("LISTALL: " + keys);
}

module.exports = { DB_SET, DB_GET, DB_DELETE, DB_LIST, verifyKey }