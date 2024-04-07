const UserModel = require("../models/User");

async function checkId(req, res, next, id) {
  try {
    const ids = await UserModel.findAll({ attributes: ["user_id"] });
    const idInDb = ids.some((userId) => userId.toJSON().user_id === Number(id));
    if (!idInDb)
      return res.json({ status: "error", message: "user not found" });
    req.id = id;
    next();
  } catch (err) {
    next(err);
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.findAll({
      attributes: ["user_id", "firstName", "lastName", "age", "adult"],
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
    const user = await UserModel.create({ firstName, lastName, age });
    user.age >= 18 ? (user.adult = true) : (user.adult = false);
    user.save();
    res.json({ status: "success", message: "user created", data: user });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", message: "failed to create new user" });
  }
}

async function getUserById(req, res) {
  const user = await UserModel.findOne({
    attributes: ["user_id", "firstName", "lastName", "age"],
    where: { user_id: req.id },
  });
  const userJson = await user.toJSON();
  res.json({ status: "success", data: { user: userJson } });
}

async function removeUserById(req, res) {
  const user = await UserModel.findOne({ where: { user_id: req.id } });
  user.destroy();
  res.json({ status: "success", message: "user removed successfully" });
}

async function findByParameter(req, res) {
  console.log(req.query);
  res.json({ status: "ok" });
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  removeUserById,
  findByParameter,
  checkId,
};
