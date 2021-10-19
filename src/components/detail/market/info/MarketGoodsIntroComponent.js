import React from 'react';
import styled from 'styled-components';

const MarketGoodsIntroComponentWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic {
        width: 1010px;
        height: 670px;
        img {
            width: 1010px;
            max-width: 100%;
            height: 670px;
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
    const { post_descriptions, post_images } = post;
    return (
        <MarketGoodsIntroComponentWrap>
            {post_images && (
                <div className="pic">
                    <img
                        src={post.post_images[0].image.replace(
                            'youtube-market-front.s3.amazonaws.com/https%3A/',
                            '',
                        )}
                    />
                </div>
            )}
            {post_descriptions && (
                <div className="context">
                    <h3>
                        <small>{post_descriptions.title}</small>
                        <br />
                        {post_descriptions.sub_title}
                    </h3>
                    <div className="word">{post_descriptions.content}</div>
                </div>
            )}
        </MarketGoodsIntroComponentWrap>
    );
};
export default MarketGoodsIntroComponent;
