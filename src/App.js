import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
const App = () => {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/search" component={SearchPage} />
    </div>
  );
}

export default App;
