import React from 'react';
import styled from 'styled-components';
import ChannelContentComponent from '../../../components/detail/channel/ChannelContentComponent';
import DetailVideoInfoComponent from '../../../components/detail/video/DetailVideoInfoComponent';

const DetailVideoInfoContainerBlock = styled.div`
    /* width: 1080px; */
    height: 571px;
    padding: 2rem;
`;

const DetailVideoInfoContainer = ({ videoDetail }) => {
    const {
        title,
        description,
        thumbnail,
        published_at,
        video_statistics,
        channel,
    } = videoDetail;
    return (
        <DetailVideoInfoContainerBlock>
            <DetailVideoInfoComponent
                title={title}
                description={description}
                published_at={published_at}
                video_statistics={video_statistics}
            />
            <ChannelContentComponent channel={channel} />
        </DetailVideoInfoContainerBlock>
    );
};
export default DetailVideoInfoContainer;
