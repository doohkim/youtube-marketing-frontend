import React from 'react';
import styled from 'styled-components';

const DetailChannelThumbnailComponentBlock = styled.div`
    width: 100%;
    height: 315x;
    img {
        width: 100%;
        height: 276px;
    }
`;

const DetailChannelThumbnailComponent = ({ channelDetail }) => {
    return (
        <DetailChannelThumbnailComponentBlock>
            <img
                src={channelDetail.bannerExternalUrl.replace(
                    'http://youtube-market-front.s3.amazonaws.com/https%3A/',
                    'https://',
                )}
                alt="bannerImage"
            />
        </DetailChannelThumbnailComponentBlock>
    );
};

export default DetailChannelThumbnailComponent;
