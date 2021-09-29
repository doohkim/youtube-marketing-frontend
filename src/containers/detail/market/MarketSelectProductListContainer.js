import React from 'react';
import styled from 'styled-components';
import BoxSelect from '../../../components/detail/market/BoxSelect';
import SelectedGoodsList from '../../../components/detail/market/SelectedGoodsList';

const MarketSelectProductListContainerBlock = styled.div`
    font-family: noto sans;
    color: #333;
    letter-spacing: 0;
    width: 560px;
    height: 232px;
    max-height: 637px;
`;

const MarketSelectProductListContainer = () => {
    return (
        <MarketSelectProductListContainerBlock>
            <BoxSelect />
            <SelectedGoodsList />
        </MarketSelectProductListContainerBlock>
    );
};

export default MarketSelectProductListContainer;
