import Auth from '../../utils/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
//since header will be on all pages, login check is stored here
const Header = (props) => {
    const navigate = useNavigate()
    useEffect(()=>{
        console.log("hit")
        if(!Auth.loggedIn()){navigate('/login')}
    })
    return (<div></div>)
}

export default Header