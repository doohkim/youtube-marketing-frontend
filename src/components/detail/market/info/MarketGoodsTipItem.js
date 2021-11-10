import React from 'react';
import styled from 'styled-components';

const MarketGoodsTipItemWrap = styled.div`
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
            b {
                font-weight: 700;
            }
        }
    }
`;

const MarketGoodsTipItem = ({ tip }) => {
    return (
        <MarketGoodsTipItemWrap>
            <div className="pic">
                {tip.image && <img src={tip.image} alt="" />}
            </div>
            <div className="word">
                <strong className="subTitle">{tip.title}</strong>
                <div>
                    <b>・</b>
                    {tip.content}
                    <br />
                </div>
            </div>
        </MarketGoodsTipItemWrap>
    );
};
export default MarketGoodsTipItem;
