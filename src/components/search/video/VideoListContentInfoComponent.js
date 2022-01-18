import React from 'react';
import styled from 'styled-components';

const VideoListContentInfoComponentWrap = styled.div`
    width: 244px;
    height: 50px;
    display: flex;
    .profileThumbnail {
        /* background: gray; */

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .profileInfo {
        flex: 1;
        .profileTitle {
        }
        .profileState {
            display: flex;
            .profileViewCount {
            }
            .profilePublishedAt {
            }
        }
    }
`;

const VideoListContentInfoComponent = ({
    channelLogo,
    channelTitle,
    view_count,
    published_at,
}) => {
    return (
        <VideoListContentInfoComponentWrap>
            <div className="profileThumbnail">
                <img
                    src={channelLogo.replace(
                        'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                        'https://',
                    )}
                    alt="logo"
                />
            </div>
            <div className="profileInfo">
                <div className="profileTitle">{channelTitle}</div>
                <div className="profileState">
                    <div className="profileViewCount">{view_count}</div>
                    <div className="profilePublishedAt">{published_at}</div>
                </div>
            </div>
        </VideoListContentInfoComponentWrap>
    );
};
export default VideoListContentInfoComponent;
