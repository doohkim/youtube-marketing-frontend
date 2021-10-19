import React from 'react';
import styled from 'styled-components';

const MarketGoodsIntroComponentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic {
        width: 1010px;
        img {
            max-width: 100%;
        }
    }
    .context {
        width: 1010px;
        margin-bottom: 170px;
        h3 {
            display: block;
            margin: 75px 0 0;
            padding-bottom: 35px;
            font-size: 38px;
            line-height: 46px;
            text-align: center;
            border-bottom: 1px solid #c1c1c1;
            color: #666;
        }
        .word {
            margin-top: 28px;
            color: #373737;
            font-size: 18px;
        }
    }
`;

const MarketGoodsIntroComponent = ({ post }) => {
    const { post_images, post_descriptions } = post;
    return (
        <MarketGoodsIntroComponentWrap>
            <div className="pic">
                <img src={post_images[0].image} />
            </div>
            <div className="context">
                <h3>
                    <small>{post_descriptions.title}</small>
                    <br />
                    {post_descriptions.sub_title}
                </h3>
                <div className="word">{post_descriptions.content}</div>
            </div>
        </MarketGoodsIntroComponentWrap>
    );
};
export default MarketGoodsIntroComponent;
