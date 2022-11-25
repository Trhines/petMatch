import Card from 'react-bootstrap/Card';
import { Star } from 'react-bootstrap-icons'
import '../homeButton.css'

const ViewMatchesButton = () => {
    return (
        <Card style={{ width: '18rem' }} className="homeButton">
            <div className="imageContainer">
                <Star size={100}/>
            </div>
            <Card.Body>
                <Card.Title>View Matches</Card.Title>
                <Card.Text>
                    See animals that match in your group
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ViewMatchesButton