import React from 'react';
import styled from 'styled-components';

import videoFilterFactories from '../../../utils/videoFilterFactories';
import SearchFactoryList from '../../SearchFactoryList';
import SearchFilterTemplate from '../../SearchFilterTemplate';
const SearchInputBlock = styled.div`
    /* display: flex; */
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const SearchFilterVideoContainer = () => {
    return (
        <SearchInputBlock>
            {videoFilterFactories.map((category, index) => (
                <SearchFilterTemplate name={category.name} key={index}>
                    <SearchFactoryList
                        factories={category.factories}
                        factoryName={category.name}
                    />
                </SearchFilterTemplate>
            ))}
        </SearchInputBlock>
    );
};

export default SearchFilterVideoContainer;
