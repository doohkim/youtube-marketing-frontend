import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VideoListContentInfoComponent from './VideoListContentInfoComponent';

const VideoAnalysisListContentComponentBlock = styled.div`
    width: 265px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    .videoThumbnail {
        width: 244px;
        height: 134px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .videoTitle {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 244px;
    }
`;

const VideoAnalysisListContentComponent = ({
    video,
    channelLogo,
    channelTitle,
}) => {
    const { id, thumbnail, title, published_at, video_statistics } = video;
    const { view_count } = video_statistics;
    return (
        <VideoAnalysisListContentComponentBlock>
            <Link to={`/detail/${id}`}>
                <div className="videoThumbnail">
                    <img
                        src={thumbnail.replace(
                            'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                            'https://',
                        )}
                        alt="thumbnail"
                    />
                </div>
                <div className="videoTitle">{title}</div>
            </Link>
            <VideoListContentInfoComponent
                channelTitle={channelTitle}
                channelLogo={channelLogo}
                published_at={published_at}
                view_count={view_count}
            />
        </VideoAnalysisListContentComponentBlock>
    );
};
export default VideoAnalysisListContentComponent;
