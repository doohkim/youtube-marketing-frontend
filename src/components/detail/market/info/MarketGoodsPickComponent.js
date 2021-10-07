import React from 'react';
import styled from 'styled-components';
import MarketGoodsPickItem from './MarketGoodsPickItem';
const MarketGoodsPickComponentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        width: 1010px;
        h3 {
            display: inline-block;
            position: relative;
            z-index: 10;
            font-size: 50px;
            width: 100%;
            margin-bottom: 70px;
            font-weight: 700;
            font-family: noto sans;
            font-weight: 700;
            color: #666;
            span {
                position: relative;
                z-index: 10;
                display: inline-block;
                margin-left: 260px;
                padding: 0 15px;
                background: #fff;
                text-shadow: 2px 0;
            }
            ::before {
                content: ' ';
                position: absolute;
                z-index: 1;
                top: 36px;
                width: 100%;
                height: 1px;
                background: #b9b9b9;
            }
        }
    }
`;

const MarketGoodsPickComponent = ({ product_list }) => {
    return (
        <MarketGoodsPickComponentWrap>
            <div className="title">
                <h3>
                    <span>{"Kurly's Check Pick"}</span>
                </h3>
            </div>
            {product_list.map((product, key) => (
                <MarketGoodsPickItem key={product.id} product={product} />
            ))}
        </MarketGoodsPickComponentWrap>
    );
};
export default MarketGoodsPickComponent;
