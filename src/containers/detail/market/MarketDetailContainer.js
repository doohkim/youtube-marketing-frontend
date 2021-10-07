import React, { useState } from 'react';
import styled from 'styled-components';
import MarketGoodsInfoComponent from '../../../components/detail/market/MarketGoodsInfoComponent';
import MarketGoodsSectionComponent from '../../../components/detail/market/MarketGoodsSectionComponent';
import { product_list } from '../../../utils/market/marketData';
const MarketDetailContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    background: white;
`;

const MarketDetailContainer = () => {
    const [orders, setOrders] = useState([]);
    return (
        <MarketDetailContainerBlock>
            <MarketGoodsSectionComponent />
            <MarketGoodsInfoComponent product_list={product_list} />
        </MarketDetailContainerBlock>
    );
};

export default MarketDetailContainer;
