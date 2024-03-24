const express = require("express");
const router = express.Router();

router.route("").get((req, res, next) => {
  return res.json({ status: "success", message: "worky fine" });
});

module.exports = router;
