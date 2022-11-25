import Card from 'react-bootstrap/Card';
import '../homeButton.css'
import Dog from '../../dogIcon'


const SearchAnimalButton = () => {
    return (
        <Card style={{ width: '18rem' }} className="homeButton">
            <div className="imageContainer">
                <Dog size={100}/>
            </div>
            <Card.Body>
                <Card.Title>Search for Pets</Card.Title>
                <Card.Text>
                    Look for a new animal to adopt
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SearchAnimalButton