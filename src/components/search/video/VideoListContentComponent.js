import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoListContentInfoComponent from './VideoListContentInfoComponent';

const VideoListContentComponentBlock = styled.div`
    width: 265px;
    height: 250px;
    /* background: blue; */
    /* border: 0.1px solid black; */
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
            <Link to="/detail">
                <div className="videoThumbnail">thumbnail</div>
                <div className="videoTitle">videotitle</div>
            </Link>
            <VideoListContentInfoComponent />
        </VideoListContentComponentBlock>
    );
};
export default VideoListContentComponent;
