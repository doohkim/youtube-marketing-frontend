import React from 'react';
import styled from 'styled-components';
import DetailChannelInfoComponent from '../../../components/detail/channel/DetailChannelInfoComponent';

const DetailChannelInfoContainerBlock = styled.div`
    height: 175px;
`;

const DetailChannelInfoContainer = () => {
    return (
        <DetailChannelInfoContainerBlock>
            <DetailChannelInfoComponent />
        </DetailChannelInfoContainerBlock>
    );
};
export default DetailChannelInfoContainer;
