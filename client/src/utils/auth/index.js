import decode from 'jwt-decode'

class AuthService {

    getToken() {
        return localStorage.getItem('id_token')
    }

    getProfile() {
        return decode(this.getToken())
    }

    isTokenExpired(token) {
        const decoded = decode(token)
        if(decoded.exp < Date.now()/1000){
            localStorage.removeItem('id_token')
            return true
        }
        return false
    }

    login(idToken){
        console.log("hit")
        localStorage.setItem('id_token', idToken)
        return
    }

    logout() {
        localStorage.removeItem('id_token')
        window.location.reload()
    }

    loggedIn() {
        const token = this.getToken()
        return token && !this.isTokenExpired(token) ? true : false;
    }
}

export default new AuthService()