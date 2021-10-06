import React from 'react';
import styled from 'styled-components';
import MarketGoodsIntroComponent from './info/MarketGoodsIntroComponent';
import MarketGoodsPickComponent from './info/MarketGoodsPickComponent';
import MarketGoodsPointComponent from './info/MarketGoodsPointComponent';

const MarketGoodsInfoComponentBlock = styled.div`
    margin-top: 50px;
    width: 1080px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: noto sans;
    letter-spacing: 0;

    .goodsPick {
    }
    .goodsTip {
    }
`;

const MarketGoodsInfoComponent = () => {
    return (
        <MarketGoodsInfoComponentBlock>
            <MarketGoodsIntroComponent />
            <MarketGoodsPointComponent />
            <MarketGoodsPickComponent />
        </MarketGoodsInfoComponentBlock>
    );
};
export default MarketGoodsInfoComponent;
