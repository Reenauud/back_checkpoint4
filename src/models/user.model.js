const argon2 = require("argon2");
const { connection } = require("../../db-connection");

class User {
  static async createOne(user) {
    const sql = "INSERT INTO user SET ?";
    return connection.promise().query(sql, [user]);
  }
  static async deleteOne(id) {
    const sql = "DELETE FROM user WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
  static async getAll(user) {
    const sql = "SELECT id, username FROM user";
    return connection.promise().query(sql, [user]);
  }
  static async getById(id) {
    const sql = "SELECT * FROM user WHERE id=?";
    return connection.promise().query(sql, [id]);
  }
  static async hashPassword(password) {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  }
  static async userNameAlreadyExists(username) {
    const sql = "SELECT * FROM user WHERE username=?";
    const [results] = await connection.promise().query(sql, [username]);
    return results.length > 0;
  }
  static async validatePassword(hashedPassword, password) {
    const valid = await argon2.verify(hashedPassword, password);
    return valid;
  }
  static async getOneByUserName(username) {
    const sql = "SELECT * FROM user WHERE username=?";
    return connection.promise().query(sql, [username]);
  }
}

module.exports = User;
