const router = require('express').Router();
const favListController = require('./favList.controller')
const { auth } = require('../../utils/auth')

router.route('/',auth).post(favListController.postFavlist);
// router.route('/login', auth).post(favListController.login);

module.exports = router;
