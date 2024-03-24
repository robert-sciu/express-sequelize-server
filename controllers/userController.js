const UserModel = require("../models/User");

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.findAll({
      attributes: ["id", "firstName", "lastName", "age"],
    });
    const usersJson = await users.map((user) => user.toJSON());
    res.json({ status: "success", data: { users: usersJson } });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "failed to fetch records" });
  }
}

async function createUser(req, res) {
  const { firstName, lastName, age } = req.body;
  try {
    await UserModel.create({ firstName, lastName, age });
    res.json({ status: "success", message: "user created" });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "failed to create new user" });
  }
}

module.exports = { getAllUsers, createUser };
