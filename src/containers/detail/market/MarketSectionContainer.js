import React from 'react';
import styled from 'styled-components';
import MarketGoodsCartPutComponent from '../../../components/detail/market/MarketGoodsCartPutComponent';
import MarketGoodsSectionComponent from '../../../components/detail/market/MarketGoodsSectionComponent';

const MarketSectionContainerBlock = styled.div`
    width: 1050px;
    height: 1420px;
    background: white;
`;

const MarketSectionContainer = () => {
    return (
        <MarketSectionContainerBlock>
            <MarketGoodsSectionComponent />
            <MarketGoodsCartPutComponent />
        </MarketSectionContainerBlock>
    );
};

export default MarketSectionContainer;
