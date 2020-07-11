const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  technology: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shortDescription: {
    type: Sequelize.STRING,
    allowNull: false
  },
  longDescription: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dates: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkGithub: {
    type: Sequelize.STRING,
    allowNull: false
  },
  linkWebsite: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Project
