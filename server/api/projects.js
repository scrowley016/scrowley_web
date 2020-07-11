const router = require('express').Router()
const {Projects} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await Projects.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})
