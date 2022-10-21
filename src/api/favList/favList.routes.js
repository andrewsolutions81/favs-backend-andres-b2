const router = require('express').Router();
const favListController = require('./favList.controller')
const { auth } = require('../../utils/auth')

// router.route('/').post(userController.signup);
// router.route('/login', auth).post(userController.login);

module.exports = router;
