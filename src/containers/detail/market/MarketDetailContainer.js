import React from 'react';
import styled from 'styled-components';
import MarketGoodsInfoComponent from '../../../components/detail/market/MarketGoodsInfoComponent';
import MarketGoodsSectionComponent from '../../../components/detail/market/MarketGoodsSectionComponent';

const MarketDetailContainerBlock = styled.div`
    width: 1080px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    background: white;
`;

const MarketDetailContainer = () => {
    return (
        <MarketDetailContainerBlock>
            <MarketGoodsSectionComponent />
            <MarketGoodsInfoComponent />
        </MarketDetailContainerBlock>
    );
};

export default MarketDetailContainer;
