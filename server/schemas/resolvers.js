const { User, Preferences } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parents,args, context) => {
            console.log(context.user)
            return await User.findOne({email: context.user})
        },
        
        login: async (parent, { email, password }) =>{
            const user = await User.findOne({where: {email: email}})
            if(!user){
                throw new AuthenticationError('incorrect email')
            }
            const validPassword = await user.checkPassword(password)
            if(validPassword){
                const token = signToken(user)
                return  {token, user}
            } else {
                throw new AuthenticationError('incorrect password')
            }
        },

        getPreferences: async (parent, args, context) => {
            console.log("query")
            console.log(context.user.id)
            const currnetPref = await Preferences.findOne({where: {user_id: context.user.id}})
            console.log("--------------------------")
            console.log(currnetPref)
        }
    },

    Mutation: {
        createAccount: async (parent, {email, password, name}) => {
            console.log(email, password, name)
            const newUser = User.create({email: email, password: password, name: name})
            return newUser
        },

        savePreference: async (parent, {animalType, breed}, context) => {
            console.log(animalType, breed)
            console.log(context.user.id)
            let newPreference = await Preferences.create({user_id: context.user.id, animalType: animalType, breed: breed})
            return newPreference
        }
    }
}

module.exports = resolvers
