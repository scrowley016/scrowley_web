const router = require('express').Router()
const {Project} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await Project.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})
