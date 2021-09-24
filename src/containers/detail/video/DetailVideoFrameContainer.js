import React from 'react';
import styled from 'styled-components';

const DetailVideoFrameContainerBlock = styled.div`
    width: 100%;
    height: 574px;
    background: black;
    display: flex;
    justify-content: center;
    iframe {
        width: 1020px;
        height: 574px;
    }
`;

const DetailVideoFrameContainer = () => {
    return (
        <DetailVideoFrameContainerBlock>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/PSlNYQUbf30?start=60"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </DetailVideoFrameContainerBlock>
    );
};
export default DetailVideoFrameContainer;
