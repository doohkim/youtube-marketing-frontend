import React from 'react';
import styled from 'styled-components';
import GoodListComponent from '../../../components/search/market/GoodListComponent';
import TitleComponent from '../../../components/search/market/TitleComponent';

const SearchMarketContainerBlock = styled.div`
    width: 1080px;
    height: auto;
`;

const SearchMarketContainer = () => {
    return (
        <SearchMarketContainerBlock>
            <TitleComponent />
            <GoodListComponent />
        </SearchMarketContainerBlock>
    );
};

export default SearchMarketContainer;
