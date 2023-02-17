const { Plant } = require("../models")

const create = async (req, res) => {
  try {
    const plant = await Plant.create(req.body)
    res.status(200).json(plant)
  } catch (error) {
    res.status(500).json(error)
  }
}


module.exports = {
  create,
}