const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/middleware");
const { userSignup, userLogin, getName } = require("../controllers/userController");



router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/getname", auth, getName);


router.all("*", (req, res) => {
  return res.status(404).send({ message: "Invalid path" });
});

module.exports = router;
