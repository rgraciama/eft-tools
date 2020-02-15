import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Hideout from '../pages/Hideout';
import NotFound from '../pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hideout" component={Hideout} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
