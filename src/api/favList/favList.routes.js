const router = require('express').Router();
const favListController = require('./favList.controller')
const { auth } = require('../../utils/auth')

// router.route('/',auth).post(favListController.postFavlist);
router.post('/', auth, favListController.postFavlist)
module.exports = router;
