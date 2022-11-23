const db = require('../config')
const { User } = require('../models')
const userSeeds = require('./userSeeds.json')

db.once('open', async () => {
    try{
        await User.deleteMany({})
        await User.create(userSeeds)
        console.log("seed completed")
        process.exit(0)
    } catch ( err) {
        throw err
    }
})
