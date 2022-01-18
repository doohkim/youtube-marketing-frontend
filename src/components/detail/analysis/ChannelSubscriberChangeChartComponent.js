import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const ChannelSubscriberChangeChartComponentWrap = styled.div`
    width: 1080px;

    /* background: gray; */
    .channel-chart-wrap {
        width: 1050px;
        height: 521px;
        margin-top: 20px;
        border: 1px solid gray;
    }
    .channel-chart-bottom-wrap {
        width: 1050px;
        height: 521px;
        margin-top: 20px;
        border: 1px solid gray;
        display: flex;
        .channel-active-rate-wrap {
            width: 49%;
            height: 571px;
        }
        .channel-active-like-rate-wrap {
            width: 51%;
            height: 571px;
        }
    }
`;

const ChannelSubscriberChangeChartComponent = ({ channelDetail }) => {
    const { channel_statistics, published_at, title } = channelDetail;
    const channel_published_date_list = [];
    const channel_subscriber_count_list = [];
    const channel_view_count_list = [];
    for (let channel_stt of channel_statistics) {
        channel_published_date_list.push(channel_stt.created_at);
        channel_subscriber_count_list.push(channel_stt.subscriber_count);
        channel_view_count_list.push(channel_stt.view_count);
    }

    return (
        <ChannelSubscriberChangeChartComponentWrap>
            <div className="channel-chart-wrap">
                <Line
                    data={{
                        labels: channel_published_date_list.reverse(),
                        datasets: [
                            {
                                label: `${title} 구독자 수 변화량`,
                                data: channel_subscriber_count_list.reverse(),
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1,
                            },
                        ],
                    }}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            <div className="channel-chart-wrap">
                <Line
                    data={{
                        labels: channel_published_date_list.reverse(),
                        datasets: [
                            {
                                label: `${title} 채널 일일 조회수 변화량`,
                                data: channel_view_count_list.reverse(),
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1,
                            },
                        ],
                    }}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
            {/* <h2>차트1</h2>
            <div className="channel-chart-bottom-wrap">
                <div className="channel-active-rate-wrap">
                    <Line />
                </div>
                <div className="channel-active-like-rate-wrap">
                    <Line />
                </div>
            </div> */}
        </ChannelSubscriberChangeChartComponentWrap>
    );
};

export default ChannelSubscriberChangeChartComponent;
