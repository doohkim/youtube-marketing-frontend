import React from 'react';
import styled from 'styled-components';

const MarketGoodsPickItemWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic {
        width: 1010px;
        /* word-break: break-all; */
        img {
            max-width: 100%;
        }
    }
    .word {
        width: 1010px;
        margin-top: 55px;
        font-size: 18px;
        line-height: 32px;
        color: #373737;
        .subTitle {
            display: block;
            margin-bottom: 20px;
            font-size: 30px;
            line-height: 38px;
            strong {
                font-weight: 700;
            }
        }
        .pickInfoBox {
            b {
                font-weight: 700;
            }
        }
    }
`;

const MarketGoodsPickItem = ({ product }) => {
    const { product_descriptions, title } = product;
    console.log(product_descriptions);
    return (
        <MarketGoodsPickItemWrap>
            <div className="pic">
                {product.thumbnail && <img src={product.thumbnail} />}
            </div>
            <div className="word">
                <strong className="subTitle">
                    <span>{product.name}</span>
                </strong>

                {/* {product_descriptions.map((description, key) => (
                    <div className="pickInfoBox" key={key}>
                        <b>{description.subTitle}</b>
                        {description.subInfo}
                        <br />
                    </div>
                ))} */}
            </div>
        </MarketGoodsPickItemWrap>
    );
};
export default MarketGoodsPickItem;
