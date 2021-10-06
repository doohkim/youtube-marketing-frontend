import React from 'react';
import styled from 'styled-components';

const MarketGoodsPointComponentWrap = styled.div`
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

    .context {
        width: 1010px;
        margin-bottom: 170px;
        .pic {
            word-break: break-all;
            img {
                width: 100%;
                border: 0;
            }
        }
    }
`;

const MarketGoodsPointComponent = () => {
    return (
        <MarketGoodsPointComponentWrap>
            <div className="title">
                <h3>
                    <span>{"Kurly's Check Point"}</span>
                </h3>
            </div>
            <div className="context">
                <div className="pic">
                    <img src="https://img-cf.kurly.com/shop/data/goodsview/20211005/gv10000231521_1.jpg" />
                </div>
            </div>
        </MarketGoodsPointComponentWrap>
    );
};
export default MarketGoodsPointComponent;
