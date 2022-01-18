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
