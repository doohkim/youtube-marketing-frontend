import React from 'react';
import styled from 'styled-components';

const DetailChannelThumbnailComponentBlock = styled.div`
    width: 100%;
    height: 276px;
    img {
        width: 100%;
        height: 276px;
    }
`;

const DetailChannelThumbnailComponent = () => {
    return (
        <DetailChannelThumbnailComponentBlock>
            <img
                src="https://yt3.ggpht.com/AgaAy56OcOTNWBBIVO_ZrOJO-mm0ZuUEllsKiQ_Yt3XNQZAlCXkQ0ZXuD08ta-v96pVGmpV_=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                alt="bannerImage"
            />
        </DetailChannelThumbnailComponentBlock>
    );
};

export default DetailChannelThumbnailComponent;
