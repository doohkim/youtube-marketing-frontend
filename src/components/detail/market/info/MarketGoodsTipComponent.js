import React from 'react';
import styled from 'styled-components';
import MarketGoodsTipItem from './MarketGoodsTipItem';

const MarketGoodsTipComponentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 170px;
    .title {
        width: 1010px;
        h3 {
            display: inline-block;
            position: relative;
            z-index: 10;
            font-size: 30px;
            padding-left: 48px;
            font-weight: 700;
            font-family: noto sans;
            font-weight: 700;
            color: #666;
            letter-spacing: 1px;
            span {
                position: relative;
                z-index: 10;
                display: inline-block;
                padding: 0 10px;
                font-size: 36px;
                background: #fff;
                text-shadow: 2px 0;
            }
        }
    }
    .tipBox {
        padding-left: 50px;
        margin-top: -15px;
        border: 1px solid #b9b9b9;
        padding-bottom: 50px;
    }
`;

const MarketGoodsTipComponent = ({ post }) => {
    const { post_tips } = post;
    return (
        <MarketGoodsTipComponentWrap>
            {post_tips.length !== 0 && (
                <div>
                    <div className="title">
                        <h3>
                            <span>{"Kurly's Check Tip"}</span>
                        </h3>
                    </div>
                    <div className="tipBox">
                        {post &&
                            post_tips.map((tip) => (
                                <MarketGoodsTipItem key={tip.id} tip={tip} />
                            ))}
                    </div>
                </div>
            )}
        </MarketGoodsTipComponentWrap>
    );
};
export default MarketGoodsTipComponent;
