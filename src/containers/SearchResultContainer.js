import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SearchResultContentList from '../components/search/SearchResultContentList';
import SearchResultHeader from '../components/search/SearchResultHeader';
import { listChannelSuccess } from '../modules/channel';
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
    const { channel } = useSelector(({ channel }) => ({
        channel: channel.channel,
        isLoading: channel.isLoading,
        channelError: channel.channelError,
    }));
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/channels/test/').then((res) => {
            dispatch(listChannelSuccess(res.data));
        });
    }, [dispatch]);
    // const sortedDescending = useCallback(
    //     (e) => {
    //         const name = e.target.name;
    //         console.log(name);
    //         setChannelContentList(
    //             channelContentList.sort((a, b) => {
    //                 return b[name] - a[name];
    //             }),
    //         );
    //         console.log('rendering', channelContentList);
    //     },
    //     [channelContentList],
    // );

    return (
        <SearchResultBlock>
            {/* <SearchResultHeader sortedDescending={sortedDescending} /> */}
            <SearchResultHeader />
            <SearchResultContentList
                channelContentList={channel}
                // setChannelContentList={setChannelContentList}
            />
        </SearchResultBlock>
    );
};

export default SearchResultContainer;
