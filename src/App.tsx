import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';

import Header from './components/ui/Header';
import Home from './views/Home';
import Search from './views/Search';
import PersonDetail from './views/PersonDetail';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/person">
              <PersonDetail />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
