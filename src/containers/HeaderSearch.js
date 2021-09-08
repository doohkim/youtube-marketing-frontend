import React from 'react';
// import './HeaderSearch.scss'
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const HeaderSearchBlock = styled.form`
  display: flex;
  background: #495057;
  align-items: center; // 세로 중앙 정렬
  width: 420px;
  height: 48px;

  select {
    width: 82px;
    height: 48px;
    background: none;
    padding-left: 1.2rem;
    padding-top: 0.125rem;
    outline: none;
    border: none;
    color: white;
    option {
      background: none;
      outline: none;
      border: none;
      color: white;
      background: #495057;
    }
  }
  input {
    background: none;
    outline: none;
    border: none;
    padding-left: 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    flex: 1;
  }
  button {
    // 기본 스타일 초기화
    height: 48px;
    background: none;
    outline: none;
    border: none;
    /* background: #868e96; */
    color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* transition: 0.1s background ease-in; */
    &:hover {
      background: #adb5bd;
    }
  }
`;

const HeaderSearch = () => {
  return (
    <HeaderSearchBlock>
      <select name="search_type">
        <option value="channel">채널</option>
        <option value="video">동영상</option>
      </select>
      <input
        placeholder="채널명 또는 관련 단어로 검색해주세요"
        name="keyword"
        // value="asdf"
      />
      <button type="submit">
        <BiSearch />
      </button>
    </HeaderSearchBlock>
  );
};

export default HeaderSearch;
