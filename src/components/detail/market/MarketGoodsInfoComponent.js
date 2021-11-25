import React from 'react';
import styled from 'styled-components';
import MarketGoodsIntroComponent from './info/MarketGoodsIntroComponent';
import MarketGoodsPickComponent from './info/MarketGoodsPickComponent';
import MarketGoodsTipComponent from './info/MarketGoodsTipComponent';

const MarketGoodsInfoComponentBlock = styled.div`
    margin-top: 50px;
    width: 1080px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: noto sans;
    letter-spacing: 0;

    .goodsPick {
    }
    .goodsTip {
    }
`;

const MarketGoodsInfoComponent = ({ post, postError, loading }) => {
    if (postError) {
        if (postError.message && postError.status === 404) {
            return (
                <MarketGoodsInfoComponentBlock>
                    존재하지 않는 포스트 입니다.
                </MarketGoodsInfoComponentBlock>
            );
        }
        return (
            <MarketGoodsInfoComponentBlock>
                오류 발생!
            </MarketGoodsInfoComponentBlock>
        );
    }

    if (loading || !post) {
        return null;
    }
    return (
        <MarketGoodsInfoComponentBlock>
            {!loading && post && (
                <div>
                    <MarketGoodsIntroComponent post={post} />
                    {/* <MarketGoodsPointComponent post={post} /> */}
                    <MarketGoodsPickComponent post={post} />
                    <MarketGoodsTipComponent post={post} />
                </div>
            )}

            {/* <MarketGoodsTipComponent post={post} loading={loading} /> */}
        </MarketGoodsInfoComponentBlock>
    );
};
export default MarketGoodsInfoComponent;
