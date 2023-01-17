const database = require("../../../infra/db");
const User = require("../models/user.model");

class UsersRepository {
  async findAll() {
    await database.sync();
    const users = await User.findAll();
    return users;
  }

  async findOne(id) {
    await database.sync();
    const user = await User.findOne({
      where: {
        id
      }
    });
    return user;
  }

  async create(user) {
    try {
      await database.sync();
      const createdUser = await User.create(user);
      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, user) {
    try {
      await database.sync();
      const updatedUser = await User.update(
        user, {
          where: {
            id
          }
        }
      );
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await database.sync();

      await User.destroy({
        where: {
          id
        }
      });
    } catch (error) {
      console.log("Error stack:", error);
    }
  }
}

module.exports = new UsersRepository();