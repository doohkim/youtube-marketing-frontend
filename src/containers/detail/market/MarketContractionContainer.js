import React from 'react';
import styled from 'styled-components';
import MarketGoodsSectionComponent from '../../../components/detail/market/MarketGoodsSectionComponent';

const MarketContractionContainerBlock = styled.div`
    width: 1050px;
    height: 1420px;
    background: white;
`;

const MarketContractionContainer = () => {
    return (
        <MarketContractionContainerBlock>
            <MarketGoodsSectionComponent />
        </MarketContractionContainerBlock>
    );
};

export default MarketContractionContainer;
