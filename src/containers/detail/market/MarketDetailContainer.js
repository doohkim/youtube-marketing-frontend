import React from 'react';
import styled from 'styled-components';
import MarketGoodsInfoContainer from './MarketGoodsInfoContainer';
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
            <MarketGoodsInfoContainer />
        </MarketDetailContainerBlock>
    );
};

export default MarketDetailContainer;
