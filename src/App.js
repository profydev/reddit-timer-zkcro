import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/search/">Search</Route>
      <Route path="/" exact>
        Marketing
      </Route>
      <Route>404</Route>
    </Switch>
  );
}

export default App;
