const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Project = db.define('project', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  technology: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  shortDescription: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  longDescription: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  dates: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.TEXT,
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
  },
  video: {
    type: Sequelize.STRING
  }
})

module.exports = Project
