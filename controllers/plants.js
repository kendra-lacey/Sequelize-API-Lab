const { Plant } = require("../models")

const create = async (req, res) => {
  try {
    const plant = await Plant.create(req.body)
    res.status(200).json(plant)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const plants = await Plant.findAll()
    res.status(200).json(plants)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id)
    res.status(200).json(plant)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg: 'Error getting plant'})
  }
}

const update = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({msg: 'Error updating plant'})
  }
}


module.exports = {
  create,
  index,
  show,
  update,
}