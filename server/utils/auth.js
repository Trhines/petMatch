const jwt = require('jsonwebtoken')

const secret = 'venividivici'
const expiration = "2h"

module.exports = {
    authMiddleware: function({req}){
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(!token){
            return req
        }

        try{
            const { data } = jwt.verify(token, secret, { maxAge: expiration})
            req.user = data
        } catch { console.log("invalid token") }
        return req
    },

    signToken: function ({ email }){
        payload = { email }
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
}