const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parents,args, context) => {
            console.log(context.user)
            return await User.findOne({email: context.user})
        },
        
        login: async (parent, { email, password }) =>{
            const user = await User.findOne({email})
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
        }
    },

    Mutation: {
        createAccount: async (parent, {email, password, name}) => {
            console.log(email, password, name)
            const newUser = User.create({email: email, password: password, name: name})
            return newUser
        }
    }
}

module.exports = resolvers
