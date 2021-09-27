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

const ChannelSubscriberChangeChartComponent = () => {
    return (
        <ChannelSubscriberChangeChartComponentWrap>
            <div className="channel-chart-wrap">
                <Line />
            </div>
            <div className="channel-chart-wrap">
                <Line />
            </div>
            <div className="channel-chart-bottom-wrap">
                <div className="channel-active-rate-wrap">
                    <Line />
                </div>
                <div className="channel-active-like-rate-wrap">
                    <Line />
                </div>
            </div>
        </ChannelSubscriberChangeChartComponentWrap>
    );
};

export default ChannelSubscriberChangeChartComponent;
