import React from 'react';
import styled from 'styled-components';
import SearchResultVideoContainer from '../../search/video/SearchResultVideoContainer';
import DetailVideoInfoContainer from './DetailVideoInfoContainer';
import DetailVideoChartContainer from './DetailVideoChartContainer';
import DetailVideoFrameContainer from './DetailVideoFrameContainer';

const DetailVideoContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    .DetailVideoContentWrap {
        width: 1080px;
        height: auto;
        margin: auto;
    }
`;

const DetailVideoContainer = () => {
    const data = {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ],
        datasets: [
            {
                label: 'Dataset of Months',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };
    return (
        <DetailVideoContainerBlock>
            <DetailVideoFrameContainer />
            <div className="DetailVideoContentWrap">
                <DetailVideoInfoContainer />
                <DetailVideoChartContainer chartData={data} />
                <SearchResultVideoContainer />
            </div>
        </DetailVideoContainerBlock>
    );
};

export default DetailVideoContainer;
