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

router.get('/:id', async (req, res, next) => {
  try {
    const data = await Project.findByPk(req.params.id)
    if (data) {
      res.json(data)
    } else {
      res.status(404).send('Hmmmm....Cant find it')
    }
  } catch (err) {
    next(err)
  }
})
