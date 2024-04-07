var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.param("id", userController.checkId);

/* GET users listing. */
router
  .route("")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router.route("/find").get(userController.findByParameter);

router
  .route("/:id")
  .get(userController.getUserById)
  .delete(userController.removeUserById);

module.exports = router;
