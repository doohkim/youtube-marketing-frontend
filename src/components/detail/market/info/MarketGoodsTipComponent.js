import React from 'react';
import styled from 'styled-components';
import MarketGoodsPickItem from './MarketGoodsPickItem';
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

const MarketGoodsTipComponent = () => {
    const tipList = [
        {
            id: 1,
            title: '사용법',
            thumbnail: null,
            descriptionList: [
                '입구의 마개를 돌리면 앰플이 개봉됩니다.',
                '한 번에 쓰기 많게 느껴진다면 마개를 꼭 닫아 보관하세요. 한 번 개봉한 제품은 가급적 빨리 쓰기를 권해드려요.',
            ],
        },
        {
            id: 2,
            title: '주의사항',
            thumbnail: null,
            descriptionList: [
                '피자에서 간혹 발견되는 검은 색 반점은 옥수수씨로 제품의 변질이 아니니 안심하고 섭취하세요.',
                '피자 도우 바닥에 보이는 갈색 자국은 돌판에 직접 굽는 과정에서 발생한 것으로 제품의 변질이 아니니 안심하고 섭취하세요.',
            ],
        },
        {
            id: 3,
            title: '보관법',
            thumbnail: null,
            descriptionList: ['-18ºC 이하에서 냉동 보관하세요.'],
        },
    ];

    return (
        <MarketGoodsTipComponentWrap>
            <div className="title">
                <h3>
                    <span>{"Kurly's Check Tip"}</span>
                </h3>
            </div>
            <div className="tipBox">
                {tipList.map((tip) => (
                    <MarketGoodsTipItem key={tip.id} tip={tip} />
                ))}
            </div>
        </MarketGoodsTipComponentWrap>
    );
};
export default MarketGoodsTipComponent;
