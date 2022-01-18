import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

const VideoUploadTermComponentWrap = styled.div`
    width: 1080px;
    height: 456px;
`;

const VideoUploadTermComponent = ({ channelDetail }) => {
    const { title, video_upload_count } = channelDetail;
    const { date, video_ea } = video_upload_count;

    //Inside data props
    const data = {
        labels: video_ea,
        datasets: [
            {
                label: '날짜',
                data: date,
                backgroundColor: 'rgba(87, 121, 234, 0.6)',
                borderColor: 'rgba(87, 121, 234, 0.6)',
                order: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 3000,
            easing: 'easeInBounce',
        },
        title: {
            display: true,
            text: `${title}영상 업로드 주기`,
            fontSize: 25,
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Days',
                    },
                    stacked: 'true',
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: '영상 개수',
                    },
                    stacked: 'true',
                    ticks: {
                        min: 0,
                        max: 3,
                        fontSize: 14,
                    },
                },
            ],
        },
    };
    return (
        <VideoUploadTermComponentWrap>
            <Bar width="200" height="200" data={data} options={options} />
        </VideoUploadTermComponentWrap>
    );
};

export default VideoUploadTermComponent;
