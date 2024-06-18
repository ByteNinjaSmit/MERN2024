const express = require('express');
const adminController = require ("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");

router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route('/contacts').get(authMiddleware,adminMiddleware,adminController.getAllContacts);

module.exports=router;