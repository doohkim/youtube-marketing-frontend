import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const ShippingContainerWrap = styled.div`
    width: 284px;
    height: 553px;

    .address {
        width: 244px;

        /* background: gray; */
        padding: 23px 19px 20px;
        border: 1px solid #f2f2f2;
        border-bottom: 0;
        .text {
            padding-left: 24px;
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: -0.3px;
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: 20px 20px;
            background-position: 0 50%;
        }
        .emph {
            color: #5f0080;
        }
    }
    button {
        margin-top: 17px;
        display: block;
        width: 100%;
        height: 36px;
        font-weight: 700;
        font-size: 12px;
        line-height: 34px;
    }
    .total_price_info {
        /* background: blue; */
        width: 244px;
        height: 216px;
        padding: 9px 18px 18px 20px;
        border: 1px solid #f2f2f2;
        background-color: #fafafa;
        .lst {
            margin: 17px 0 0;
            padding-top: 17px;
            border-top: 1px solid #eee;
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
    }
`;

const ShippingContainer = () => {
    return (
        <ShippingContainerWrap>
            <div className="address">
                <h3 className="text">배송지</h3>
                <div className="text">
                    <span className="emph">배송지 입력을하고</span> <br />
                    배송유형을 확인해 보세요!
                </div>
                <button>주소검색</button>
            </div>
            <div className="total_price_info">
                <dl className="amount">
                    <dt className="tit">상품 금액</dt>
                    <dd className="price">
                        <span className="num">77,920</span>
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
                <dl className="amount lst">
                    <dt className="tit">결제예정금액</dt>
                    <dd className="price">
                        <span className="num">80,920</span>
                        <span className="won">원</span>
                    </dd>
                </dl>
            </div>
            <Link to="/order">
                <Button>주문하기</Button>
            </Link>
        </ShippingContainerWrap>
    );
};

export default ShippingContainer;
