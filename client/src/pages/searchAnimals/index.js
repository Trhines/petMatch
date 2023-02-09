import Header from '../../components/header'
import Button from 'react-bootstrap/Button'

const SearchAnimals = () => {
    return(
        <div>
            <Header/>
            <Button as="a" href={'/searchPreferences'}>Search Filters</Button>
        </div>
    )
}

export default SearchAnimals