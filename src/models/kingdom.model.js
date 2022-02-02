const { connection } = require("../../db-connection");

class Kingdom {
  static async createOne(kingdom) {
    const sql = "INSERT INTO kingdom SET ?";
    return connection.promise().query(sql, [kingdom]);
  }
}

module.exports = Kingdom;
