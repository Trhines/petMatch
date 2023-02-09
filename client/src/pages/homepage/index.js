
import Header from '../../components/header'
import ViewGroupButton from '../../components/homeButtons/viewGroupButton'
import ViewMatchesButton from '../../components/homeButtons/viewMatchesButton'
import FindMatchButton from '../../components/homeButtons/findMatchesButton'
import SearchAnimalButton from '../../components/homeButtons/searchPetsButton'
import { Link } from 'react-router-dom'
import './index.css'

const HomePage = () => {

    return (
        <div>
            <Header />
            <div className="homeBtnContainer">
                <Link to="/searchAnimals" className="link">
                    <SearchAnimalButton />
                </Link>
                <Link to="/findMatches" className="link">
                    <FindMatchButton />
                </Link>
                <Link to="/viewMatches" className="link">
                    <ViewMatchesButton />
                </Link>
                <Link to="/myGroup" className="link">
                    <ViewGroupButton />
                </Link>
            </div>
        </div>

    )
}

export default HomePage