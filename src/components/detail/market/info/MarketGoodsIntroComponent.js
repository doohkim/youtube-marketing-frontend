import React from 'react';
import styled from 'styled-components';

const MarketGoodsIntroComponentWrap = styled.div`
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

const MarketGoodsIntroComponent = () => {
    return (
        <MarketGoodsIntroComponentWrap>
            <div className="pic">
                <img src="https://img-cf.kurly.com/shop/data/goodsview/20211005/gv00000231520_1.jpg" />
            </div>
            <div className="context">
                <h3>
                    <small>매일 챙기는 온 가족 핫팩</small>
                    <br />
                    {' [히트템] 핫팩 레드'}
                </h3>
                <div className="word">
                    {
                        '공기가 차가워질수록 단숨에 열기를 전해주는 핫팩이 참 유용하게 느껴지죠. \
                        필요한 때에 꺼내어 가볍게 흔들어 주기만 하면 되니까요. 특히나 야외 활동이나 \
                        레저 활동을 즐기는분들이라면 필수적으로 챙겨야 할 아이템인데요. 히트템은 매일 \
                        주머니에 쏙 챙기기 좋은 핫팩 레드를 준비했어요. 너무 크지도 작지도 않은 \
                        90g의 용량으로 약 15시간 동안 따뜻함을 유지한답니다. 20개입 구성으로 온 \
                        가족이 든든하게 사용할 수있고요. 하나씩 비닐 포장해서 사용 전에 굳을 염려가 없답니다.'
                    }
                </div>
            </div>
        </MarketGoodsIntroComponentWrap>
    );
};
export default MarketGoodsIntroComponent;
