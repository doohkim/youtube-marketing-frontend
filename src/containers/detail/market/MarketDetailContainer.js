import React from 'react';
import styled from 'styled-components';
import MarketGoodsInfoContainer from './MarketGoodsInfoContainer';
import MarketSectionContainer from './MarketSectionContainer';

const MarketDetailContainerBlock = styled.div`
    width: 1080px;
    margin: auto;
    padding-top: 30px;
`;

const MarketDetailContainer = () => {
    return (
        <MarketDetailContainerBlock>
            <MarketSectionContainer />
            <MarketGoodsInfoContainer />
        </MarketDetailContainerBlock>
    );
};

export default MarketDetailContainer;
