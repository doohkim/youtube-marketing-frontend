import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

const ChannelPerformanceSummaryChartComponentWrap = styled.div`
    width: 60%;
    border-right: 1px solid #dcdcdc;
`;

const ChannelPerformanceSummaryChartComponent = ({ channelDetail }) => {
    const { channel_statistics, published_at, channel_likeability_index } =
        channelDetail;
    const { view_count, video_count, diff_view_count } = channel_statistics[1];
    const { like_ability } = channel_likeability_index;
    const daysOfpublished =
        (new Date() - new Date(published_at)) / 1000 / 60 / 60 / 24;

    const data = {
        labels: ['일일조회수', '영상별 평균 조회수', '조회수 증가율', '호감도'],
        datasets: [
            {
                label: '채널 Performance 요약',
                type: 'bar',
                backgroundColor: 'rgba(0,0,0,0.2)',
                data: [
                    view_count / daysOfpublished / 10000,
                    view_count / video_count / 10000,
                    diff_view_count / 100,
                    like_ability,
                ],
            },
        ],
    };

    return (
        <ChannelPerformanceSummaryChartComponentWrap>
            <Bar data={data} />
        </ChannelPerformanceSummaryChartComponentWrap>
    );
};

export default ChannelPerformanceSummaryChartComponent;
