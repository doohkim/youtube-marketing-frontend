import React from 'react';
import styled from 'styled-components';
import MarketSelectProductListContainer from '../../../containers/detail/market/MarketSelectProductListContainer';

const MarketGoodsSectionComponentWrap = styled.div`
    width: 1050px;
    height: auto;
    display: flex;

    .thumb {
        width: 430px;
        height: 552px;
        img {
            margin-left: 5rem;
            max-width: 100%;
            height: 100%;
        }
    }

    .goods-info {
        /* margin-left: 3rem; */
        height: auto;
        .goods-name {
            width: 560px;
            height: 68px;
        }
        .goods-price {
            width: 560px;
            height: 38px;
        }
        .godds-description {
            float: right;
            width: 560px;
            align-items: center;
            justify-content: center;
            .list {
                border-top: 1px solid #f4f4f4;
                height: auto;
                padding-top: 15px;

                .tit {
                    float: left;
                    width: 150px;
                    font-size: 14px;
                    color: #666;
                    line-height: 20px;
                }
                .desc {
                    overflow: hidden;
                    font-size: 14px;
                    line-height: 20px;
                    word-break: break-all;
                    .emph {
                        display: block;
                        padding-top: 4px;
                        font-weight: 400;
                        font-size: 12px;
                        color: #666;
                        line-height: 16px;
                    }
                }
            }
            .cartPut {
                background: #8b00ff;
                display: block;
                font-size: 16px;
                line-height: 52px;
                letter-spacing: -0.1px;
                text-align: center;
                width: 560px;
                height: 56px;
                color: white;
                padding-bottom: 2px;
            }
        }
    }
`;

const MarketGoodsSectionComponent = () => {
    return (
        <MarketGoodsSectionComponentWrap>
            <div className="thumb">
                <img src="http://thegill.webmaker21.kr/superboard/data/product/2020111914421616057645362168.jpg" />
            </div>

            <div className="goods-info">
                <p className="goods-name">
                    [남향푸드또띠아] 간편 간식 브리또 10종
                </p>
                <p className="goods-price"> 2,900원</p>
                <div className="godds-description">
                    <dl className="list">
                        <dt className="tit">판매단위</dt>
                        <dd className="desc">1봉</dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">중량/용량</dt>
                        <dd className="desc">제품별 상이</dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">배송구분</dt>
                        <dd className="desc">샛별배송/택배배송</dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">원산지</dt>
                        <dd className="desc">이탈리아</dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">포장타입</dt>
                        <dd className="desc">
                            상온/종이포장
                            <strong className="emph">
                                택배배송은 에코포장이 스티로폼으로 대체됩니다.
                            </strong>
                        </dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">유통기한</dt>
                        <dd className="desc">
                            수령일 포함 최소 146일 남은 제품을 보내 드립니다
                        </dd>
                    </dl>
                    <dl className="list">
                        <dt className="tit">안내사항</dt>
                        <dd className="desc">
                            해당 상품의 최소 구매수량은 2개입니다. 구매시 참고
                            부탁드립니다.
                        </dd>
                    </dl>
                    <MarketSelectProductListContainer />
                    <button className="cartPut">장바구니 담기</button>
                </div>
            </div>
        </MarketGoodsSectionComponentWrap>
    );
};
export default MarketGoodsSectionComponent;
