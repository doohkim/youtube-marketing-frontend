import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import SearchResultContentList from '../components/search/SearchResultContentList';
import SearchResultHeader from '../components/search/SearchResultHeader';
import data from '../utils/data';

const SearchResultBlock = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const SearchResultContainer = () => {
    const [channelContentList, setChannelContentList] = useState(
        data.channelsForList,
    );
    const sortedDescending = useCallback(
        (e) => {
            const name = e.target.name;
            console.log(name);
            setChannelContentList(
                channelContentList.sort((a, b) => {
                    return b[name] - a[name];
                }),
            );
            console.log('rendering', channelContentList);
        },
        [channelContentList],
    );

    return (
        <SearchResultBlock>
            <SearchResultHeader sortedDescending={sortedDescending} />
            <SearchResultContentList
                channelContentList={channelContentList}
                setChannelContentList={setChannelContentList}
            />
        </SearchResultBlock>
    );
};

export default SearchResultContainer;
