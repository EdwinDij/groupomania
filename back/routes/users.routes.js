const express = require("express")
const router = express.Router()
const userCtrl = require("../controllers/users.controllers")

router.post("/signup",  userCtrl.signup);
router.post("/login",  userCtrl.login);
router.put("/:id",  userCtrl.modifyUser);
router.delete("/:id",  userCtrl.deleteUser);

module.exports = router