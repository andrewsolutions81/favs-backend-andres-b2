const router = require('express').Router();
const userController = require('./user.controller');

router.route('/').get(userController.list)
router.route('/').post(userController.signup);
router.route('/login').post(userController.login);

module.exports = router;
