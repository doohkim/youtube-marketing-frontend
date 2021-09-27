import React from 'react';
import styled from 'styled-components';
import { GiAlliedStar } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineUser, AiOutlinePlayCircle } from 'react-icons/ai';
const ChannelPerformanceSummaryInfoComponentWrap = styled.div`
    width: 40%;
    /* background: gray; */
    padding: 1rem;
    height: 310px;

    .channel-global-evaluate-info-wrap {
        display: flex;
        justify-content: center;
        .youtue-subscriber-rank-info-wrap {
            width: 173px;
            height: 80px;
            background: gray;
            text-align: center;
            padding: 15px 0 13px;
            .channel-revenue-rank-text {
                font-size: 18px;
                font-weight: 700;
            }
        }
        .youtue-revenue-rank-info-wrap {
            margin-left: 1rem;
            width: 173px;
            height: 80px;
            text-align: center;
            background: gray;
            padding: 15px 0 13px;
            .channel-revenue-rank-text {
                font-size: 18px;
                font-weight: 700;
            }
        }
    }
    .channel-detail-grade-wrap {
        padding-left: 2rem;
        padding-right: 2rem;
        .channel-detail-grade-category-wrap {
            height: 35px;
            margin: 0;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            .channel-detail-grade-category-sub-wrap {
                height: 35px;
                align-items: center;
                display: flex;
                justify-content: center;
            }
            .channel-detail-grade-bage {
                width: 47px;
                height: 27px;
                border-radius: 10px;
                border: 1px solid #ff0045;
                color: #ff0045;
                font-weight: 500;
                font-size: 11px;
                padding: 2px 9px;
                margin-right: 10px;
            }
            .channel-detail-grade-category {
                font-size: 14px;
                padding-left: 8px;
            }
            .channel-detail-grade-value {
                font-weight: 700;
                font-size: 20px;
            }
        }
    }
`;

const ChannelPerformanceSummaryInfoComponent = () => {
    return (
        <ChannelPerformanceSummaryInfoComponentWrap>
            <div className="channel-global-evaluate-info-wrap">
                <div className="youtue-subscriber-rank-info-wrap">
                    <div className="channel-revenue-rank-category">
                        유튜브 구독자 순위{' '}
                    </div>
                    <div className="channel-revenue-rank-text">22 th</div>
                    <div>[Top 1%]</div>
                </div>
                <div className="youtue-revenue-rank-info-wrap">
                    <div>유튜브 수익 순위 </div>
                    <div className="channel-revenue-rank-text">33 th</div>
                    <div>[Top 1%]</div>
                </div>
            </div>
            <p className="channel-detail-grade-wrap">
                <p className="channel-detail-grade-category-wrap">
                    <p className="channel-detail-grade-category-sub-wrap">
                        <i>
                            <GiAlliedStar size={17} />
                        </i>
                        <span class="channel-detail-grade-category">
                            구독자 등급
                        </span>
                    </p>
                    <p>
                        <span className="channel-detail-grade-bage ">Mega</span>
                        <span className="channel-detail-grade-value">
                            다이아
                        </span>
                    </p>
                </p>
                <p className="channel-detail-grade-category-wrap">
                    <p>
                        <i>
                            <AiOutlineUser size={17} />
                        </i>
                        <span class="channel-detail-grade-category">
                            구독자 수
                        </span>
                    </p>
                    <p>
                        <span className="channel-detail-grade-value">
                            5860만
                        </span>
                    </p>
                </p>
                <p className="channel-detail-grade-category-wrap">
                    <p>
                        <i>
                            <MdDateRange size={17} />
                        </i>
                        <span class="channel-detail-grade-category">
                            채널 가입일
                        </span>
                    </p>
                    <p>
                        <span className="channel-detail-grade-value">
                            2012-12-17
                        </span>
                    </p>
                </p>
                <p className="channel-detail-grade-category-wrap">
                    <p>
                        <i>
                            <AiOutlinePlayCircle size={17} />
                        </i>
                        <span class="channel-detail-grade-category">
                            총 영상수
                        </span>
                    </p>
                    <p>
                        <span className="channel-detail-grade-value">1611</span>
                    </p>
                </p>
            </p>
        </ChannelPerformanceSummaryInfoComponentWrap>
    );
};
export default ChannelPerformanceSummaryInfoComponent;
