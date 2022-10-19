const router = require('express').Router();
const userController = require('./user.controller');
const { auth } = require('../../utils/auth')

router.route('/', auth).post(userController.signup);
router.route('/', auth).post(userController.login);

module.exports = router;
