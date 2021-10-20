import React from 'react';
import styled from 'styled-components';
import MarketSelectProductListContainer from '../../../containers/detail/market/MarketSelectProductListContainer';

const MarketGoodsSectionComponentWrap = styled.div`
    width: 1050px;
    height: auto;
    /* display: flex; */
    .section-wrap {
        width: 1050px;
        height: auto;
        display: flex;
        margin-left: 2rem;

        .thumb {
            width: 430px;
            height: 552px;
            img {
                max-width: 100%;
                height: 100%;
            }
        }

        .goods-info {
            margin-left: 2rem;
            height: auto;
            .goods-name {
                .name {
                    width: 560px;
                    height: 68px;
                    display: block;
                    padding-right: 60px;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 34px;
                    word-break: break-all;
                }
                .short_desc {
                    display: block;
                    padding: 4px 60px 0 0;
                    font-size: 14px;
                    color: #999;
                    line-height: 20px;
                    word-break: break-all;
                }
            }
            .goods-price {
                .dc_price {
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 30px;
                    letter-spacing: 0;
                    word-break: break-all;
                }
                width: 560px;
                height: 38px;
            }
            .godds-description {
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
                        .won {
                            padding: 0 7px 0 2px;
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 30px;
                            vertical-align: 2px;
                            letter-spacing: 0;
                        }
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
    }
`;

const MarketGoodsSectionComponent = ({ post, loading, postError }) => {
    if (postError) {
        if (postError.message && postError.status === 404) {
            return (
                <MarketGoodsSectionComponentWrap>
                    존재하지 않는 포스트 입니다.
                </MarketGoodsSectionComponentWrap>
            );
        }
        return (
            <MarketGoodsSectionComponentWrap>
                오류 발생!
            </MarketGoodsSectionComponentWrap>
        );
    }

    return (
        <MarketGoodsSectionComponentWrap>
            {!loading && post && (
                <div className="section-wrap">
                    <div className="thumb">
                        <img
                            src={post.post_images[0].image.replace(
                                'youtube-market-front.s3.amazonaws.com/https%3A/',
                                '',
                            )}
                        />
                    </div>

                    <div className="goods-info">
                        <p className="goods-name">
                            <strong className="name">{post.title}</strong>
                            <span className="short_desc">
                                {post.short_description}
                            </span>
                        </p>
                        <p className="goods-price">
                            <span className="dc_price">
                                {post.min_price.price}
                                <span className="won">원</span>
                            </span>
                        </p>
                        <div className="godds-description">
                            {post.min_price.weight && (
                                <dl className="list">
                                    <dt className="tit">판매단위</dt>
                                    <dd className="desc">
                                        {post.min_price.weight}
                                    </dd>
                                </dl>
                            )}

                            {post.packaging_type && (
                                <dl className="list">
                                    <dt className="tit">배송구분</dt>
                                    <dd className="desc">
                                        {post.packaging_type}
                                    </dd>
                                </dl>
                            )}
                            {post.min_price.country_of_origin && (
                                <dl className="list">
                                    <dt className="tit">원산지</dt>
                                    <dd className="desc">
                                        {post.min_price.country_of_origin}
                                    </dd>
                                </dl>
                            )}

                            {post.min_price && (
                                <dl className="list">
                                    <dt className="tit">유통기한</dt>
                                    <dd className="desc">
                                        {`수령일 포함 최소 ${post.min_price.shelf_life}일 남은 제품을 보내
                                    드립니다`}
                                    </dd>
                                </dl>
                            )}
                            {post.guides && (
                                <dl className="list">
                                    <dt className="tit">안내사항</dt>
                                    <dd className="desc">{post.guides}</dd>
                                </dl>
                            )}
                            <MarketSelectProductListContainer
                                products={post.products}
                            />
                            {/* <button className="cartPut">장바구니 담기</button> */}
                        </div>
                    </div>
                </div>
            )}
        </MarketGoodsSectionComponentWrap>
    );
};
export default MarketGoodsSectionComponent;
