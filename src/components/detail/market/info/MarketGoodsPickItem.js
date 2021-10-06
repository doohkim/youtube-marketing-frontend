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
    const pickItems = [
        {
            id: 1,
            subTitle: '・개수',
            subInfo: ' : 1박스(90g X 20개입)',
        },
        {
            id: 1,
            subTitle: '・사이즈 ',
            subInfo: ': 가로 13 X 세로 10cm',
        },
        {
            id: 1,
            subTitle: '・지속시간',
            subInfo: ' : 15시간',
        },
        {
            id: 1,
            subTitle: '・최고온도 및 평균온도',
            subInfo: ' : 70℃ / 60℃ (±5℃)',
        },
        {
            id: 1,
            subTitle: '・특징',
            subInfo:
                ' : 분말형 타입의 핫팩으로, 세련된 붉은색 바탕에 도트 무늬 디자인이 들어가 있어요. 너무 큰 핫팩이 부담스러우신 분들에게 추천드리는 제품이에요. ',
        },
    ];
    return (
        <MarketGoodsPickItemWrap>
            <div className="pic">
                {product.thumbnail && <img src={product.thumbnail} />}
            </div>
            <div className="word">
                <strong className="subTitle">
                    <span>{product.name}</span>
                </strong>

                {pickItems.map((item) => (
                    <div className="pickInfoBox">
                        <b>{item.subTitle}</b>
                        {item.subInfo}
                        <br />
                    </div>
                ))}
            </div>
        </MarketGoodsPickItemWrap>
    );
};
export default MarketGoodsPickItem;
