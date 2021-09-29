import React from 'react';
import styled from 'styled-components';

const SelectedGoodsListWrap = styled.div`
    width: 560px;
    height: 325px;
    overflow: hidden;
`;

const SelectedGoodsList = () => {
    return (
        <SelectedGoodsListWrap>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </SelectedGoodsListWrap>
    );
};

export default SelectedGoodsList;
