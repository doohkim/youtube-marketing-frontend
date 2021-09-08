import React from 'react';
import styled from 'styled-components';
import SearchResultContentList from '../components/search/SearchResultContentList';
import SearchResultHeader from '../components/SearchResultHeader';

const SearchResultBlock = styled.div`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

const SearchResultContainer = () => {
  return (
    <SearchResultBlock>
      <SearchResultHeader />
      <SearchResultContentList />
    </SearchResultBlock>
  );
};

export default SearchResultContainer;
