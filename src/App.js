import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MarketingPage from './MarketingPage/MarketingPage';
import SearchPage from './SearchPage/SearchPage';

function App() {
  return (
    <Switch>
      <Route path="/search/">
        <SearchPage />
      </Route>
      <Route path="/" exact>
        <MarketingPage />
      </Route>
      <Route>404</Route>
    </Switch>
  );
}

export default App;
