import React from 'react';
import styled from 'styled-components';

const VideoContentHeaderContainerWrap = styled.div`
    /* background: red; */
    width: 1061px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    .channelName {
    }
    .videoSortingwrap {
        display: flex;

        .videoSortingStandard {
            padding-right: 10px;
        }
    }
`;

const VideoContentHeaderContainer = () => {
    return (
        <VideoContentHeaderContainerWrap>
            <div className="channelName">title</div>
            <div className="videoSortingwrap">
                <div className="videoSortingStandard">구독자순</div>
                <div className="videoSortingStandard">업데이트 날짜 순</div>
            </div>
        </VideoContentHeaderContainerWrap>
    );
};
export default VideoContentHeaderContainer;
