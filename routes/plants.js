const router = require('express').Router()
const PlantsCtrl = require('../controllers/plants.js')


router.post('/', PlantsCtrl.create)
router.get('/', PlantsCtrl.index)
router.get('/:id', PlantsCtrl.show)

  module.exports = router