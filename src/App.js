import React from 'react';
import { Route } from 'react-router-dom';
import DetailVideoPage from './pages/DetailVideoPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import MarketPage from './pages/MarketPage';
import OrderPage from './pages/OrderPage';

const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/search" component={SearchPage} />
            {/* <Route path="/search/:type" component={SearchPage} /> */}
            <Route path="/detail" component={DetailVideoPage} />
            <Route path="/channel" component={ChannelPage} />
            <Route path="/market/:postId" component={MarketPage} />
            <Route path="/order" component={OrderPage} />
        </div>
    );
};

export default App;
