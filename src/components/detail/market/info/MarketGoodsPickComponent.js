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

const MarketGoodsPickComponent = () => {
    const product_list = [
        {
            id: 1,
            name: '핫 치킨 브리또',
            price: 2900,
            thumbnail:
                'https://img-cf.kurly.com/shop/data/goodsview/20211005/gv00000231520_1.jpg',
        },
        {
            id: 2,
            name: '청양마요 브리또',
            price: 2900,
            thumbnail: null,
        },
        {
            id: 3,
            name: '양마요 브리또',
            price: 2900,
            thumbnail: null,
        },
    ];

    return (
        <MarketGoodsPickComponentWrap>
            <div className="title">
                <h3>
                    <span>{"Kurly's Check Pick"}</span>
                </h3>
            </div>
            {product_list.map((product) => (
                <MarketGoodsPickItem key={product.id} product={product} />
            ))}
        </MarketGoodsPickComponentWrap>
    );
};
export default MarketGoodsPickComponent;
