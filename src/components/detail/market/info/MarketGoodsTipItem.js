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
    const { descriptionList } = tip;
    return (
        <MarketGoodsTipItemWrap>
            <div className="pic">
                {tip.thumbnail && <img src={tip.thumbnail} />}
            </div>
            <div className="word">
                <strong className="subTitle">{tip.title}</strong>
                {descriptionList.map((description, key) => (
                    <div key={key}>
                        <b>・</b>
                        {description}
                        <br />
                    </div>
                ))}
            </div>
        </MarketGoodsTipItemWrap>
    );
};
export default MarketGoodsTipItem;
