import Card from 'react-bootstrap/Card';
import '../homeButton.css'
import { HandThumbsUp } from 'react-bootstrap-icons'

const FindMatchButton = () => {
    return (
        <Card style={{ width: '18rem' }} className="homeButton">
            {/* custom width for 2 thumb icons */}
            <div className="imageContainer" style={ {width: "100%"} }>
                <div className="thumbContainer">
                <HandThumbsUp size={75}/>
                <HandThumbsUp size={75}/>
                </div>
            </div>
            <Card.Body>
                <Card.Title>Search for Matches</Card.Title>
                <Card.Text>
                    See animals your group likes to see if any match
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FindMatchButton