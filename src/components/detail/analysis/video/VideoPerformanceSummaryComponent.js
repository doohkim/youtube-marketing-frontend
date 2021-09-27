import React from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle, FaRegCommentDots } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
const VideoPerformanceSummaryComponentWrap = styled.div`
    width: 1080px;
    box-shadow: none;
    position: relative;
    padding: 20px 25px 25px;
    margin-bottom: 20px;
    .channel-video-analysis-info-wrap {
        width: 100%;
        padding: 0 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .video-analysis-block {
            width: 150px;
            display: flex;
            flex-direction: column;
            padding-right: 1rem;
            span {
                :first-child {
                    font-size: 20px;
                    font-weight: 700;
                }
                :last-child {
                    padding-left: 5px;
                }
            }
        }
    }
`;

const VideoPerformanceSummaryComponent = () => {
    return (
        <VideoPerformanceSummaryComponentWrap>
            <div>closer food 채널 영상 퍼포먼스</div>
            <div className="channel-video-analysis-info-wrap">
                <p className="video-analysis-block">
                    <span>147</span>
                    <span>
                        <FaRegPlayCircle />
                        <span>영상수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>188,618</span>
                    <span>
                        <BsPlay />
                        <span>영상별평균조회수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>94</span>
                    <span>
                        <FaRegCommentDots />
                        <span>평균 댓글수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>1,655</span>
                    <span>
                        <FiThumbsUp />
                        <span>평균 좋아요수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>56</span>
                    <span>
                        <FiThumbsDown />
                        <span>평균 싫어요수</span>
                    </span>
                </p>
            </div>
        </VideoPerformanceSummaryComponentWrap>
    );
};

export default VideoPerformanceSummaryComponent;
