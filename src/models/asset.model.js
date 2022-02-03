const { connection } = require("../../db-connection");

class Asset {
  static async createOne(asset) {
    const sql = "INSERT INTO asset SET ?";
    return connection.promise().query(sql, [asset]);
  }
  static async deleteOne(id) {
    const sql = "DELETE FROM asset WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
  static async getAll(asset) {
    const sql = "SELECT * FROM asset";
    return connection.promise().query(sql, [asset]);
  }
  static async getById(id) {
    const sql = "SELECT * FROM asset WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Asset;
