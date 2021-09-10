import React from 'react';
import styled from 'styled-components';
import SearchFactoryList from '../components/SearchFactoryList';
import SearchFilterTemplate from '../components/SearchFilterTemplate';
import filterFactories from '../utils/filterFactories';

const SearchInputBlock = styled.div`
    /* display: flex; */
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const SearchFilterContainer = () => {
    // const [searchFactory, setSearchFactory] = useState([
    //   {
    //     id: 1,
    //     name: '국가',
    //     factories: [
    //       {
    //         name: '한국',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     name: '카테고리',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     name: '구독자',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 4,
    //     name: '구독자 성별',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 5,
    //     name: '구독자 연령',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 6,
    //     name: '평균 광고 단가',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 7,
    //     name: '전체 영상별 평균 조회수',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    //   {
    //     id: 8,
    //     name: '채널',
    //     factories: [
    //       {
    //         name: '전체',
    //         checked: true,
    //       },
    //     ],
    //   },
    // ]);
    // const onClick = useCallback(
    //   (e) => {
    //     const name = e.target.name;
    //     const factory = e.target.value;
    //     const newfactory = {
    //       name: factory,
    //       checked: true,
    //     };
    //     console.log(newfactory);
    //     setSearchFactory(
    //       searchFactory.map((factory) =>
    //         factory.name === name
    //           ? {
    //               ...factory,
    //               factories: factory.factories.concat(newfactory),
    //             }
    //           : factory,
    //       ),
    //     );

    //     e.preventDefault();
    //     console.log(searchFactory);
    //   },
    //   [searchFactory],

    //   // api 요청을 해야함
    //   // api 요청 받아온 데이터를 다시 setResult 값으로 설정
    // );
    return (
        <SearchInputBlock>
            {filterFactories.map((category, index) => (
                <SearchFilterTemplate name={category.name} key={index}>
                    <SearchFactoryList
                        factories={category.factories}
                        factoryName={category.name}
                        // searchFactory={searchFactory}
                        // onClick={onClick}
                    />
                </SearchFilterTemplate>
            ))}
        </SearchInputBlock>
    );
};

export default SearchFilterContainer;

// const onClick = useCallback(
//   (name, factory) => {
//     const newfactory = {
//       name: factory,
//       checked: true,
//     };
//     console.log(newfactory);
//     setSearchFactory(
//       searchFactory.map((factory) =>
//         factory.name === name
//           ? { ...factory, factories: factory.factories.concat(newfactory) }
//           : factory,
//       ),
//     );

//     // e.preventDefault();
//     console.log(searchFactory['0'].factories);
//   },
//   [searchFactory],

//   // api 요청을 해야함
//   // api 요청 받아온 데이터를 다시 setResult 값으로 설정
// );
