import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoodsItemBlock = styled.div`
    width: 338px;
    height: 576px;
    cursor: pointer;
    /* display: block; */

    /* background: green; */
    .thumb {
        /* display: block;
        position: relative; */
        width: 100%;
        height: 435px;
        background-color: #f9f8f9;
        /* padding: 10px; */

        img {
            max-width: 100%;
            height: auto;
        }
    }
    .info {
        display: flex;
        flex-direction: column;
        padding: 14px 10px 10px 0;
        list-style-type: none;
        text-decoration: none;
        line-height: none;
        color: black;
        .product-title {
            overflow: hidden;
            max-height: 58px;
            font-weight: 400;
            font-size: 20px;
        }
        .price {
            display: block;
            padding-top: 7px;
            font-size: 18px;
            line-height: 29px;
        }
    }
`;

const GoodsItem = () => {
    return (
        <GoodsItemBlock>
            <div className="thumb">
                <Link to="/market">
                    <img src="https://img-cf.kurly.com/shop/data/goods/1632810556406l0.jpg" />
                </Link>
            </div>
            <Link className="info" to="/market">
                <span className="product-title">[비비고] 납작군만두 1.4kg</span>
                <span className="price">9,980원</span>
            </Link>
        </GoodsItemBlock>
    );
};

export default GoodsItem;
