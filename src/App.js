import React from 'react';
import { Route } from 'react-router-dom';
import DetailVideoPage from './pages/DetailVideoPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/search" component={SearchPage} />
            {/* <Route path="/search/:type" component={SearchPage} /> */}
            <Route path="/detail" component={DetailVideoPage} />
            <Route path="/channel" component={ChannelPage} />
        </div>
    );
};

export default App;
