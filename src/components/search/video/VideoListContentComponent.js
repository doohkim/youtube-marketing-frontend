import React from 'react';
import styled from 'styled-components';
import VideoListContentInfoComponent from './VideoListContentInfoComponent';

const VideoListContentComponentBlock = styled.div`
    width: 265px;
    height: 250px;
    background: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    .videoThumbnail {
        background: white;
        width: 244px;
        height: 134px;
    }
    .videoTitle {
        background: yellow;
        width: 244px;
    }
`;

const VideoListContentComponent = () => {
    return (
        <VideoListContentComponentBlock>
            <div className="videoThumbnail">thumbnail</div>
            <div className="videoTitle">videotitle</div>
            <VideoListContentInfoComponent />
        </VideoListContentComponentBlock>
    );
};
export default VideoListContentComponent;
