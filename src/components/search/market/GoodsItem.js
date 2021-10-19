import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GoodsItemBlock = styled.div`
    width: 338px;
    height: 576px;
    cursor: pointer;
    /* display: block; */

    /* background: green; */
    /* .thumb { */
    /* display: block;
        position: relative; */
    /* width: 338px;
        height: 435px;
        background-color: #f9f8f9; */
    /* padding: 10px; */
    Link {
        width: 338px;
        height: 435px;
    }
    img {
        max-width: 338px;
        /* height: auto; */
        height: 435px;
    }
    /* } */
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
    const { id, title, post_images, products } = post;
    return (
        <GoodsItemBlock>
            {/* <div className="thumb"> */}
            <Link to={`/market/${id}`}>
                <img src={post_images[0]} />
            </Link>
            {/* </div> */}
            <Link className="info" to={`/market/${id}`}>
                <span className="product-title">{title}</span>
                <span className="price">9,980원</span>
            </Link>
        </GoodsItemBlock>
    );
};

export default GoodsItem;
