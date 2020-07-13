'use strict'

const db = require('../server/db')
const {Project} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const project = await Promise.all([
    Project.create({
      title: 'Portfolio Website',
      technology:
        'Built on a postgreSQL backend with express/sequelize with a react/redux frontend',
      shortDescription: 'This very website!',
      longDescription:
        'Created using the NERD stack, This website is designed to host my projects and allow me to dive deeper into my role in each one. All projects are hosted in a Postgres Database to allow me to update and manage my project page.',
      dates: 'July 2020',
      role: 'Solo Full Stack Developer',
      linkGithub: 'https://github.com/scrowley016/scrowley_web',
      linkWebsite: 'scrowley.com',
      image: 'scrowleyWeb.png',
      video: 'https://www.youtube.com/embed/3cYBfuphkuE'
    }),
    Project.create({
      title: 'Puzzle Party',
      technology:
        'Built on a postgreSQL backend with express/sequelize with a react/redux frontend',
      shortDescription:
        'Worked with a team of 4 to create an e-commerce site to sell puzzles',
      longDescription:
        'Developed over nine days, the Puzzle Party team is Amanda Haldy, Bailey Keefer, Xiawen Wu and Shannon Crowley. We created a shopping cart feature using session data for guest users, and created a database for our logged in users. We also added the ability to sign in with your google accuont rather than create your own account. Because we are potentially dealing with customers, we also sucured all backed routes with admin and loggedin user hooks to prevent unwanted database manipulations.',
      dates: 'April 2020',
      role:
        'Full Stack developer - created All Puzzle and Single Puzzle View,Add to cart feature for both guest and users, and the order history feature.',
      linkGithub: 'https://github.com/PuzzleParty/PuzzleParty',
      linkWebsite: 'https://puzzle-party.herokuapp.com/',
      image: 'pparty.png',
      video: 'https://www.youtube.com/embed/MaXD4tSRagc'
    }),
    Project.create({
      title: 'Chef Remy',
      technology:
        'Javascript, AWS Lambda, Spoonacular API, Speech Synthesis API, Edamam API, Node, Tesseract, Express, React, Redux, Git, Github, Sequelize, PSQL, HTML, and CSS',
      shortDescription:
        'Worked with a team of 4 to create an Alexa Skill and accompanying web application to fill all your kitchen needs.',
      longDescription:
        'Upload an image of your grocery receipt to our site to add the groceries to your fridge. Then choose a recipe and follow along with Remy on your Amazon Alexa device as he talks you through each step of your recipe, patiently waiting for your next vocal command. Manually add items to your "fridge" as a user of Chef Remy, Use the recipe scanner to populate your "fridge" with ingredients,Speak with the browser Chef Remy to navigate site pages or seek help, Find a recipe from our Daily Recipes listing, Choose from a small selection of custom recipes tailored to your fridge items, Save missing ingredients to a shopping list you can use while youre out stocking up on groceries',
      dates: 'May 2020',
      role:
        'Full Stack developer- respondsible for creating the fridge component, and the Alexa Skill including connecting Alexa to the Spoonacular API and our own fridge API.',
      linkGithub: 'https://github.com/GHP-Warpaint/remi',
      linkWebsite: 'https://chef-remy.herokuapp.com/',
      image: 'chefRemy.png',
      video: 'https://www.youtube.com/embed/S7irXCy6GfI'
    }),
    Project.create({
      title: 'Hangry Hangry Campers',
      technology: 'Unity, C#',
      shortDescription:
        'A First Person Food Launcher created using the Unity engine. Users launch food to save their friends, and themselves, from hanger.',
      longDescription:
        'THE STORY: You and your friends are casually camping near a long-abandoned nuclear waste site. After a long day of hiking, fishing, and having fun you return to your campsite to find that someone has scattered your food all over the campground! Discovering this makes your friends…hangry! The combination of hunger, anger, and nuclear waste turns your once best friends into hangry hangry zombie campers demanding food and looking to attack! In a moment of panic and fear you take your last granola bar and throw it at your friend closest to you. He picks up the granola bar, eats it, and is transformed back into your best friend! Yay! Your mission is now clear. You must travel around the campsite and retrieve the lost food, and then use your handy food launcher (and they said you were crazy to bring it camping) to get the food to your friends and turn them back to save the day!',
      dates: 'April 2020',
      role: 'Solo Full Stack developer',
      linkGithub: 'https://github.com/scrowley016/HangryHangryCampers',
      linkWebsite: 'coming soon!',
      image: 'hangryC.png',
      video: 'coming soon!'
    }),
    Project.create({
      title: 'Arrest Alert',
      technology: 'NERD Stack',
      shortDescription:
        'Worked with a team of 6 during Hack for Black Lives Matter to create a location based web application allowing users to send a text message automatically when their phone is located inside a police station for more than 10mins',
      longDescription: 'meow,meow,meow',
      dates: 'June 2020',
      role: 'Full Stack developer',
      linkGithub: 'https://github.com/arrest-alert/arrest-alert',
      linkWebsite: 'coming soon!',
      image: 'aAlert.png',
      video: 'https://www.youtube.com/embed/u-VfgRZ8Ato'
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
