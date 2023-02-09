import Auth from '../../utils/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { People, HandThumbsUp, Star, House } from 'react-bootstrap-icons'
import Dog from '../dogIcon'
import './index.css'
//since header will be on all pages, login check is stored here
const Header = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (!Auth.loggedIn()) { navigate('/login') }
    })

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-btns">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="h-link"> Home <House /> </Nav.Link>
                        <Nav.Link href="searchAnimals" className="h-link"> Find Pets <Dog size={20}/> </Nav.Link>
                        <Nav.Link href="myGroup" className="h-link"> My Group <People size={20} /> </Nav.Link>
                        <Nav.Link href="myLikes" className="h-link"> My Likes <HandThumbsUp size={20} /> </Nav.Link>
                        <Nav.Link href="viewMatches" className="h-link"> Check Matches <Star size={20} /> </Nav.Link>
                    </Nav>
                    {/* replace log out with account/options later */}
                    <Button onClick={() =>Auth.logout()}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
