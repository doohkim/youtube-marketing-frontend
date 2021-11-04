import React from 'react';
import styled from 'styled-components';

const VideoListContentInfoComponentWrap = styled.div`
    width: 244px;
    height: 50px;
    display: flex;
    .profileThumbnail {
        /* background: gray; */
    }

    .profileInfo {
        flex: 1;
        background: white;
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

const VideoListContentInfoComponent = () => {
    return (
        <VideoListContentInfoComponentWrap>
            <div className="profileThumbnail">image</div>
            <div className="profileInfo">
                <div className="profileTitle">channel title</div>
                <div className="profileState">
                    <div className="profileViewCount">220,220</div>
                    <div className="profilePublishedAt">2021-09-09</div>
                </div>
            </div>
        </VideoListContentInfoComponentWrap>
    );
};
export default VideoListContentInfoComponent;
