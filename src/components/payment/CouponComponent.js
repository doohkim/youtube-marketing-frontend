import React from 'react';
import styled from 'styled-components';

const CouponComponentBlock = styled.div`
    width: 742px;
    height: 420px;
    h2 {
        padding: 74px 0 16px;
        font-weight: bold;
        font-size: 20px;
        color: #333;
        line-height: 29px;
        clear: both;
        border-bottom: 1px solid black;
    }
`;

const CouponComponent = () => {
    return (
        <CouponComponentBlock>
            <h2>쿠폰 / 적립금</h2>
        </CouponComponentBlock>
    );
};
export default CouponComponent;
