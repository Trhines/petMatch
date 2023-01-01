const db = require('../config')
const { User } = require('../models')
const userSeeds = require('./userSeeds.json')

const seedDB = async () => {
    await db.sync({force: true })

    //const data = await User.bulkCreate(userSeeds)
    for(let i=0; i<userSeeds.length; i++){
        newUser = await User.create(userSeeds[i])
    }
    process.exit()
}

seedDB()

// db.once('open', async () => {
//     try{
//         await User.deleteMany({})
//         await User.create(userSeeds)
//         console.log("seed completed")
//         process.exit(0)
//     } catch ( err) {
//         throw err
//     }
// })
