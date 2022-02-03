const { connection } = require("../../db-connection");

class Personnage {
  static async createOne(personnage) {
    const sql = "INSERT INTO personnage SET ?";
    return connection.promise().query(sql, [personnage]);
  }
  static async deleteOne(id) {
    const sql = "DELETE FROM personnage WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
  static async getAll(personnage) {
    const sql = "SELECT * FROM personnage";
    return connection.promise().query(sql, [personnage]);
  }
  static async getById(id) {
    const sql = "SELECT * FROM personnage WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
}

module.exports = Personnage;
