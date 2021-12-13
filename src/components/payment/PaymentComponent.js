import React from 'react';
import styled from 'styled-components';

const PaymentComponentBlock = styled.div`
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
    .payment_info_block {
        width: 742px;
        height: auto;
        display: flex;
        h3 {
            width: 190px;
            padding: 8px 0 0;
            font-weight: bold;
            font-size: 13px;
            color: #333;
            line-height: 24px;
            letter-spacing: -0.32px;
            vertical-align: top;
        }
        .section_full {
            width: 552px;
            height: 151px;
            display: flex;
            flex-direction: column;
            .bank-info-wrap {
                margin-top: 16px;
                background: white;
                width: 100%;
                height: 32px;
                border: 1px solid #ccc;
                background-image: url('http://www.w3.org/2000/svg');
            }
            select {
                width: 100%;
                height: 32px;
                padding: 0 28px 0 10px;
                font-size: 15px;
                border: 0;
                box-sizing: border-box;
                background: transparent;
            }
        }
    }
`;

const PaymentComponent = () => {
    return (
        <PaymentComponentBlock>
            <h2>결제 수단</h2>
            <div className="payment_info_block">
                <h3>신용카드</h3>
                <div className="section_full">
                    <div className="bank-info-wrap">
                        <select name="bank_info">
                            <option value="">은행 선택</option>
                        </select>
                    </div>
                    <div className="bank-info-wrap">
                        <select name="bank_info">
                            <option value="0">일시불</option>
                        </select>
                    </div>
                </div>
            </div>
        </PaymentComponentBlock>
    );
};
export default PaymentComponent;
