import React from 'react';
import styled from "styled-components";
import Categories from '../components/Categories';

const BottomHeaderBlockContainer = styled.div`
    width: 1080px;
    height: 31px;
    display: flex;
    padding: 1rem;
    /* margin: 0 auto; */
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
` 

const BottomHeader = () => {
    return (
        <BottomHeaderBlockContainer>
            <Categories />
        </BottomHeaderBlockContainer>
    )
}

export default BottomHeader;