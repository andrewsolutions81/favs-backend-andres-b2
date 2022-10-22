const router = require('express').Router();
const favController = require('./fav.controller')
const { auth } = require('../../utils/auth')

router.post('/', auth, favController.postFav)
module.exports = router;
