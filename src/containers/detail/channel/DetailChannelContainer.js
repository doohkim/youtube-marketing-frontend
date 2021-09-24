import React from 'react';
import styled from 'styled-components';
import DetailChannelInfoComponent from '../../../components/detail/channel/DetailChannelInfoComponent';
import DetailChannelThumbnailComponent from '../../../components/detail/channel/DetailChannelThumbnailComponent';

const DetailChannelContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    .DetailChannelContentWrap {
        width: 1080px;
        height: auto;
        margin: auto;
    }
`;

const DetailChannelContainer = () => {
    return (
        <DetailChannelContainerBlock>
            <DetailChannelThumbnailComponent />
            <div className="DetailChannelContentWrap">
                <DetailChannelInfoComponent />
            </div>
        </DetailChannelContainerBlock>
    );
};
export default DetailChannelContainer;
