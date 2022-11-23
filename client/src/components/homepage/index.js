import { useQuery } from '@apollo/client'
import { QUERY_USER } from '../../utils/queries'
import Header from '../Header'

const HomePage = () => {

    const { data, loading, error } = useQuery(QUERY_USER)
    if (data) {
        console.log(data)
    }
    if (error) { console.log(error) }
    return (
        <div>
            <Header />
            <h1>my body is ready</h1>
        </div>

    )
}

export default HomePage