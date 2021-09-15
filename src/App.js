import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/search/:type" component={SearchPage} />
        </div>
    );
};

export default App;
