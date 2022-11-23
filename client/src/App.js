import './App.css';
import SignUpForm from './components/entreeForms/signUpForm';
import LogInForm from './components/entreeForms/logInForm';
import HomePage from './components/homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const httpLink = new HttpLink({uri: 'http://localhost:3001/graphql'})

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
        <Route path="/login" element={<LogInForm/>}/>
        <Route path="/signUp" element={<SignUpForm/>}/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
