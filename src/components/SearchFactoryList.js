import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchFilterListBlock = styled.div`
  display: flex;
  width: 800px;
  .factory {
    width: 120px;
    height: 35px;
    /* background: white; */

    float: left;
  }
`;

const SearchFactoryList = ({ factories, name }) => {
  const [searchFactory, setSearchFactory] = useState([
    {
      id: 1,
      name: '국가',
      factories: [
        {
          name: '한국',
          checked: true,
        },
      ],
    },
    {
      id: 2,
      name: '카테고리',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 3,
      name: '구독자',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 4,
      name: '구독자 성별',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 5,
      name: '구독자 연령',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 6,
      name: '평균 광고 단가',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 7,
      name: '전체 영상별 평균 조회수',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
    {
      id: 8,
      name: '채널',
      factories: [
        {
          name: '전체',
          checked: true,
        },
      ],
    },
  ]);
  const onClick = useCallback(
    (e) => {
      const name = e.target.name;
      const factory = e.target.value;
      const newfactory = {
        name: factory,
        checked: true,
      };
      setSearchFactory(
        searchFactory.map((factory) =>
          factory.name === name
            ? {
                ...factory,
                factories: factory.factories.concat(newfactory),
              }
            : factory,
        ),
      );
      e.preventDefault();
    },
    [searchFactory],
  );
  useEffect(() => {
    console.log(searchFactory['0'].factories);
    // api 요청을 해야함
    // api 요청 받아온 데이터를 다시 setResult 값으로 설정
  }, [searchFactory]);
  return (
    <SearchFilterListBlock>
      <ul>
        {factories.map((factory, index) => (
          <button
            className="factory"
            name={name}
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
