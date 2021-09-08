import React from 'react'
import styled from 'styled-components';

import HeaderSearch from './HeaderSearch';
const TopHeaderBlock = styled.div`

  display: flex;
  padding: 1rem;
  width: 1048px;
  height: 50px;
  /* background: red; */
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center; // 세로 중앙 정렬
    width: 150px;
    height: 48px;
    font-size: 1.25rem;
  }
  .profile{
    display: flex;
    align-items: center; // 세로 중앙 정렬
    width: 150px;
    height: 48px;
    font-size: 1.25rem;
  }

`;


const TopHeader = () => {
    return (
        <TopHeaderBlock>
            <div className="logo">logo</div>
            <HeaderSearch />
            <div className="profile">profile</div>
        </TopHeaderBlock>
    )
}

export default TopHeader;