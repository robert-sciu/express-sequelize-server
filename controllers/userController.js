function getAllUsers(req, res) {
  res.json({ status: "success", data: "wait for it" });
}

function createUser(req, res) {
  const { firstName, lastName, age } = req.body;
  res.json({ status: "success", data: { firstName, lastName, age } });
}

module.exports = { getAllUsers, createUser };
