import React from 'react';
import styled from 'styled-components';

const SearchFilterTemplateBlock = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  /* border: 1px solid #22b8cf; */
  .search-category-title {
    /* background: #22b8cf; */
    width: 200px;
    color: #22b8cf;
    border: 1px solid #22b8cf;
    height: auto;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .content {
    width: 800px;
    color: #22b8cf;
    border: 1px solid #22b8cf;
  }
  /* & + & {
    border-top: 2px solid #22b8cf;
  } */
`;
const SearchFilterTemplate = ({ children, name }) => {
  return (
    <SearchFilterTemplateBlock>
      <div className="search-category-title">{name}</div>
      <div className="content">{children}</div>
    </SearchFilterTemplateBlock>
  );
};

export default SearchFilterTemplate;
