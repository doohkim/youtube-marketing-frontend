import React from 'react';
import styled from 'styled-components';

const ShippingComponentBlock = styled.div`
    width: 150px;
    height: 443px;
    margin-left: 2rem;
    width: 284px;
    height: 443px;
    padding: 9px 18px 18px 20px;
    border: 1px solid #f2f2f2;
    .final_tit {
        border-top: 1px solid white;
    }
    .amount {
        width: 244px;
        padding-top: 9px;
        overflow: hidden;

        .tit {
            float: left;
            font-size: 16px;
            line-height: 24px;
            white-space: nowrap;
            float: left;
            width: 80px;
            font-weight: 400;
            letter-spacing: -0.5px;
        }
        .price {
            float: right;
            /* font-family: Noto Sans; */
            letter-spacing: 0;
            display: block;
            line-height: 24px;
            text-align: right;
            .num {
                font-size: 18px;
            }
            .won {
                padding-left: 2px;
                font-size: 16px;
                vertical-align: 1px;
            }
        }
    }
`;

const ShippingComponent = ({ order, getTotalAmount }) => {
    return (
        <ShippingComponentBlock>
            <dl className="amount">
                <dt className="tit">주문 금액</dt>
                <dd className="price">
                    {order ? (
                        <span className="num">{getTotalAmount(order)}</span>
                    ) : (
                        <span className="num">{0}</span>
                    )}

                    <span className="won">원</span>
                </dd>
            </dl>
            <dl className="amount">
                <dt className="tit">배송비</dt>
                <dd className="price">
                    <span className="num">3000</span>
                    <span className="won">원</span>
                </dd>
            </dl>
            <dl className="amount final_tit">
                <dt className="tit">최종 결제 금액</dt>
                <dd className="price">
                    {order ? (
                        <span className="num">
                            {getTotalAmount(order) + 3000}
                        </span>
                    ) : (
                        <span className="num">{3000}</span>
                    )}
                </dd>
            </dl>
        </ShippingComponentBlock>
    );
};

export default ShippingComponent;
