const router = require('express').Router();
const favListController = require('./favList.controller')
const { auth } = require('../../utils/auth')

router.post('/', auth, favListController.postFavlist)
router.get('/', auth, favListController.getAllFavList)
router.get('/:id', auth , favListController.getSingleFavList)
router.get('/:id', auth , favListController.deleteFavList)

module.exports = router;
