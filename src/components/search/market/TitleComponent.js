import React from 'react';
import styled from 'styled-components';

const TitleComponentBlock = styled.div`
    width: 1080px;
    font-size: 32px;
    background: white;
    text-align: center;

    padding-top: 26px;
    font-family: noto sans;
    font-weight: 400;
    letter-spacing: 0;
`;

const TitleComponent = () => {
    return <TitleComponentBlock>신상품</TitleComponentBlock>;
};
export default TitleComponent;
