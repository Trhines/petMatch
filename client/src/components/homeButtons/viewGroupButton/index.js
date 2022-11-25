import Card from 'react-bootstrap/Card';
import { People } from 'react-bootstrap-icons'
import '../homeButton.css'

const ViewGroupButton = () => {
    return (
        <Card style={{ width: '18rem' }} className="homeButton">
            <div className="imageContainer">
                <People size={100}/>
            </div>
            <Card.Body>
                <Card.Title>View Group</Card.Title>
                <Card.Text>
                    Check out my group
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ViewGroupButton