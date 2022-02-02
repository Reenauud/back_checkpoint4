const { connection } = require("../../db-connection");

class Asset {
  static async createOne(asset) {
    const sql = "INSERT INTO asset SET ?";
    return connection.promise().query(sql, [asset]);
  }
}

module.exports = Asset;
