const { connection } = require("../../db-connection");

class Kingdom {
  static async createOne(kingdom) {
    const sql = "INSERT INTO kingdom SET ?";
    return connection.promise().query(sql, [kingdom]);
  }
  static async getOneById(kingdom, id) {
    const sql = "SELECT * FROM kingdom WHERE id=?";
    return connection.promise().query(sql, [kingdom]);
  }
  static async deleteOne(id) {
    const sql = "DELETE FROM kingdom WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Kingdom;
