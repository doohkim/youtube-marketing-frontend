import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import VideoListContentComponent from '../../../../components/search/video/VideoListContentComponent';
import { getListVideo } from '../../../../modules/videos';

const VideoListContainerWrap = styled.div`
    width: 1061px;
    max-width: 1080px;

    /* height: 1016px; */
    display: flex;
    flex-wrap: wrap;
    /* background: gray; */
`;

const VideoListContainer = () => {
    const dispatch = useDispatch();
    const { videoList, isLoading, videoListError } = useSelector(
        ({ video }) => ({
            videoList: video.videoList,
            isLoading: video.isLoading,
            videoListError: video.videoListError,
        }),
    );
    useEffect(() => {
        dispatch(getListVideo());
    }, [dispatch]);
    return (
        <VideoListContainerWrap>
            {videoList &&
                videoList.map((video) => (
                    <VideoListContentComponent video={video} />
                ))}
        </VideoListContainerWrap>
    );
};

export default VideoListContainer;
