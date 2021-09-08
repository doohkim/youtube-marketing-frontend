import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchFilterListBlock = styled.div`
  display: flex;
  width: 100%;
  .factory {
    width: 120px;
    height: 35px;
    /* background: white; */

    float: left;
  }
`;

const SearchFactoryList = ({ factories, factoryName }) => {
  const [searchFactory, setSearchFactory] = useState([
    {
      id: 1,
      categoryType: '국가',
      categoryFactories: [
        {
          factoryName: '한국',
          checked: true,
        },
      ],
    },
    {
      id: 2,
      categoryType: '카테고리',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 3,
      categoryType: '구독자',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 4,
      categoryType: '구독자 성별',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 5,
      categoryType: '구독자 연령',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 6,
      categoryType: '평균 광고 단가',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 7,
      categoryType: '전체 영상별 평균 조회수',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 8,
      categoryType: '채널',
      categoryFactories: [
        {
          factoryName: '전체',
          checked: true,
        },
      ],
    },
  ]);
  const onClick = useCallback(
    (e) => {
      const factoryName = e.target.name;
      const factoryValue = e.target.value;
      const newFactory = {
        factoryName: factoryValue,
        checked: true,
      };
      setSearchFactory(
        searchFactory.map((factory) =>
          factory.categoryType === factoryName
            ? {
                ...factory,
                categoryFactories: factory.categoryFactories.concat(newFactory),
              }
            : factory,
        ),
      );
      e.preventDefault();
    },
    [searchFactory],
  );
  useEffect(() => {
    // console.log(searchFactory['0'].categoryFactories);
    // api 요청을 해야함
    // api 요청 받아온 데이터를 다시 setResult 값으로 설정
  }, [searchFactory]);
  return (
    <SearchFilterListBlock>
      <ul>
        {factories.map((factory, index) => (
          <button
            className="factory"
            name={factoryName}
            value={factory}
            onClick={onClick}
            key={index}
          >
            {factory}
          </button>
        ))}
      </ul>
    </SearchFilterListBlock>
  );
};
export default SearchFactoryList;
