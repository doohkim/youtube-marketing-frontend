import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchResultContentList from '../components/search/SearchResultContentList';
import SearchResultHeader from '../components/search/SearchResultHeader';
import { getListChannels } from '../modules/channel';
// import data from '../utils/data';

const SearchResultBlock = styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
`;

const SearchResultContainer = () => {
    // const [channelContentList, setChannelContentList] = useState(
    //     data.channelsForList,
    // );

    // 여기서 데이터 관리 할까? api 날려도 되지 않을가?
    const dispatch = useDispatch();
    const { channelList, isLoading, channelListError } = useSelector(
        ({ channel }) => ({
            channelList: channel.channelList,
            isLoading: channel.isLoading,
            channelListError: channel.channelListError,
        }),
    );
    useEffect(() => {
        dispatch(getListChannels());
    }, [dispatch]);

    return (
        <SearchResultBlock>
            {/* <SearchResultHeader sortedDescending={sortedDescending} /> */}
            <SearchResultHeader />
            <SearchResultContentList channelContentList={channelList} />
        </SearchResultBlock>
    );
};

export default SearchResultContainer;
