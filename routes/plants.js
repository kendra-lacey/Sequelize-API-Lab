const router = require('express').Router()
const PlantsCtrl = require('../controllers/plants.js')


router.post('/', PlantsCtrl.create)
router.get('/', PlantsCtrl.index)

  module.exports = router