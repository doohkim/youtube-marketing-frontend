import React from 'react';
import styled from 'styled-components';

import data from '../../utils/data';
import SearchResultContentComponent from './SearchResultContentComponent';

const SearchResultContentListBlock = styled.div`
  /* display: flex; */
  /* background: white; */
  align-items: center;
  justify-content: flex-end;
`;

const SearchResultContentList = () => {
  return (
    <SearchResultContentListBlock>
      {data.channelsForList.map((channelList, index) => (
        <SearchResultContentComponent
          info={channelList}
          index={index}
          key={index}
        />
      ))}
    </SearchResultContentListBlock>
  );
};

export default SearchResultContentList;
