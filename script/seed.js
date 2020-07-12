'use strict'

const db = require('../server/db')
const {Project} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const project = await Promise.all([
    Project.create({
      title: 'Portfolio Website',
      technology: 'NERD Stack',
      shortDescription:
        'Worked with a team of 4 to create an e-commerce site to sell puzzles',
      longDescription: 'meow,meow,meow',
      dates: 'July 2020',
      role: 'Full Stack developer',
      linkGithub: 'www.meow.com',
      linkWebsite: 'PuzzleParty.com',
      image: ' insert here'
    }),
    Project.create({
      title: 'Puzzle Party',
      technology: 'NERD Stack',
      shortDescription:
        'Worked with a team of 4 to create an e-commerce site to sell puzzles',
      longDescription: 'meow,meow,meow',
      dates: 'April 2020',
      role: 'Full Stack developer',
      linkGithub: 'www.meow.com',
      linkWebsite: 'PuzzleParty.com',
      image: ' insert here'
    }),
    Project.create({
      title: 'Chef Remy',
      technology: 'NERD Stack',
      shortDescription:
        'Worked with a team of 4 to create an Alexa Skill and accompanying web application',
      longDescription: 'meow,meow,meow',
      dates: 'May 2020',
      role: 'Full Stack developer',
      linkGithub: 'www.meow.com',
      linkWebsite: 'PuzzleParty.com',
      image: ' insert here'
    }),
    Project.create({
      title: 'Hangry Hangry Campers',
      technology: 'Unity,C#',
      shortDescription:
        'Worked with a team of 4 to create an e-commerce site to sell puzzles',
      longDescription: 'meow,meow,meow',
      dates: 'April 2020',
      role: 'Full Stack developer',
      linkGithub: 'www.meow.com',
      linkWebsite: 'PuzzleParty.com',
      image: ' insert here'
    }),
    Project.create({
      title: 'Arrest Alert',
      technology: 'NERD Stack',
      shortDescription:
        'Worked with a team of 4 during Hack for Black Lives Matter to create a location based web application',
      longDescription: 'meow,meow,meow',
      dates: 'June 2020',
      role: 'Full Stack developer',
      linkGithub: 'www.meow.com',
      linkWebsite: 'PuzzleParty.com',
      image: ' insert here'
    })
  ])
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
