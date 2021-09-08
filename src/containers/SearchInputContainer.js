import React from 'react';
import styled from 'styled-components';
import SearchInputComponent from '../components/SearchInputComponent';

const SearchInputBlock = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: center;

`;


const SearchInputContainer = () => {
    return (
        <SearchInputBlock>
            <SearchInputComponent />
        </SearchInputBlock>
    )
}

export default SearchInputContainer