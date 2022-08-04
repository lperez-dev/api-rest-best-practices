const fs = require("fs");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./src/database/json/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf8",
  });
};

module.exports = { saveToDatabase };