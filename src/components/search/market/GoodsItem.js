import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoodsItemBlock = styled.div`
    width: 338px;
    height: 576px;
    cursor: pointer;

    Link {
        width: 338px;
        height: 435px;
    }
    img {
        max-width: 338px;
        height: 435px;
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

const GoodsItem = ({ post }) => {
    const { id, title, post_images, min_price } = post;
    return (
        <GoodsItemBlock>
            <Link to={`/market/${id}`}>
                <img src={post_images[0]} alt="" />
            </Link>
            <Link className="info" to={`/market/${id}`}>
                <span className="product-title">{title}</span>
                <span className="price">{min_price}원</span>
            </Link>
        </GoodsItemBlock>
    );
};

export default GoodsItem;
