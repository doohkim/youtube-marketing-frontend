import React from 'react';
import styled from 'styled-components';
import ListSortMenuComponent from './ListSortMenuComponent';
import InnerGoodsListComponent from './InnerGoodsListComponent';
const GoodListComponentBlock = styled.div``;

const GoodListComponent = () => {
    return (
        <GoodListComponentBlock>
            <ListSortMenuComponent />
            <InnerGoodsListComponent />
        </GoodListComponentBlock>
    );
};
export default GoodListComponent;
