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


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;