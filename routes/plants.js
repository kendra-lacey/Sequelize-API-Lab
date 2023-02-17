const router = require('express').Router()
const plantsCtrl = require('../controllers/plants.js')


router.get('/', plantsCtrl.index)
router.get('/:id', plantsCtrl.show)
router.post('/', plantsCtrl.create)
router.put('/:id', plantsCtrl.update)
router.delete('/:id', plantsCtrl.delete)

  module.exports = router