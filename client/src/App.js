import './App.css';
import SignUpForm from './pages/entreeForms/signUpForm';
import LogInForm from './pages/entreeForms/logInForm';
import HomePage from './pages/homepage';
import MyGroup from './pages/myGroup'
import MyLikes from './pages/myLikes'
import SearchAnimals from './pages/searchAnimals'
import SearchPreferences from './pages/searchPreferences'
import ViewMatches from './pages/viewMatches'
import FindMatches from './pages/findMatches';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: localStorage.getItem('id_token'),
      }
    }));
    return forward(operation)
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink)
  })


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          {/* template route <Route path="/" element={<component/>}/> */}
          <Route path="login" element={<LogInForm />} />
          <Route path="signUp" element={<SignUpForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="myGroup" element={<MyGroup />} />
          <Route path="myLikes" element={<MyLikes />} />
          <Route path="searchAnimals" element={<SearchAnimals />} />
          <Route path="searchPreferences" element={<SearchPreferences />} />
          <Route path="viewMatches" element={<ViewMatches />} />
          <Route path="findMatches" element={<FindMatches />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
