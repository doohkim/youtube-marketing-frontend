import React from 'react';
import styled from 'styled-components';
import ChannelContentComponent from '../../../components/detail/channel/ChannelContentComponent';
import DetailVideoInfoComponent from '../../../components/detail/video/DetailVideoInfoComponent';

const DetailVideoInfoContainerBlock = styled.div`
    /* width: 1080px; */
    height: 571px;
    padding: 2rem;
`;

const DetailVideoInfoContainer = () => {
    return (
        <DetailVideoInfoContainerBlock>
            <DetailVideoInfoComponent />
            <ChannelContentComponent />
        </DetailVideoInfoContainerBlock>
    );
};
export default DetailVideoInfoContainer;
