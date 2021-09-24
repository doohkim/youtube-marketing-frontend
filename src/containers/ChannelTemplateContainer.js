import React from 'react';
import styled from 'styled-components';
import ChannelList from '../components/ChannelList';
import ChannelTemplate from '../components/ChannelTemplate';
const ChannelListBlock = styled.div`
    /* box-sizing: border-box; */
    width: 1080px;
    padding-bottom: 3rem;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
    .channel-top-block {
        display: flex;
    }
    .channel-bottom-block {
        display: flex;
    }
`;

const ChannelTemplatContainer = () => {
    // console.log(is)
    const channelInfo = [
        {
            id: 1,
            kind: '25-44 | 뷰티 선호 채널💖',
            info: [
                {
                    pk: 1,
                    title: 'BLACKPINK',
                    subscriber: 64700000,
                },
                {
                    pk: 2,
                    title: 'HYBE LABELS',
                    subscriber: 61000000,
                },
                {
                    pk: 3,
                    title: 'BANGTANTV',
                    subscriber: 57300000,
                },
            ],
        },
        {
            id: 2,
            kind: '뷰티 카테고리 브랜드 순위',
            info: [
                {
                    pk: 1,
                    title: 'one31',
                    subscriber: 24396833902,
                },
                {
                    pk: 2,
                    title: 'Ch3Thailand',
                    subscriber: 29300000,
                },
                {
                    pk: 3,
                    title: 'SMTOWN',
                    subscriber: 28600000,
                },
            ],
        },

        {
            id: 3,
            kind: '13-24세 | FUN 선호 채널',
            info: [
                {
                    pk: 1,
                    title: '1MILLION Dance Studio',
                    subscriber: 24200000,
                },
                {
                    pk: 2,
                    title: '1theK (원더케이)',
                    subscriber: 23300000,
                },
                {
                    pk: 3,
                    title: 'JYP Entertainment',
                    subscriber: 21900000,
                },
            ],
        },
        {
            id: 4,
            kind: '주목할만한 유투버🧐',
            info: [
                {
                    pk: 1,
                    title: 'GMM GRAMMY OFFICIAL',
                    subscriber: 20900000,
                },
                {
                    pk: 2,
                    title: 'Mnet K-POP',
                    subscriber: 18600000,
                },
                {
                    pk: 3,
                    title: '지피티',
                    subscriber: 300000,
                },
            ],
        },
        {
            id: 5,
            kind: '남성 | 경제 선호채널💖',
            info: [
                {
                    pk: 1,
                    title: 'JFlaMusic',
                    subscriber: 17300000,
                },
                {
                    pk: 2,
                    title: 'RsiamMusic : อาร์สยาม',
                    subscriber: 16800000,
                },
                {
                    pk: 3,
                    title: 'KBS WORLD TV',
                    subscriber: 16700000,
                },
            ],
        },

        {
            id: 6,
            kind: '45-80세 | 게임 선호 채널',
            info: [
                {
                    pk: 1,
                    title: 'GRAMMY GOLD OFFICIAL',
                    subscriber: 15800000,
                },
                {
                    pk: 2,
                    title: 'Kaykai Salaider',
                    subscriber: 15300000,
                },
                {
                    pk: 3,
                    title: 'zbing z.',
                    subscriber: 14500000,
                },
            ],
        },
    ];

    // page 620 참조
    // axios 이용해서 데이터 setArticle 설정하면서
    // loading true => 데이터 받으면 false 로 바꿔서 데이터 받아오는 종안 로딩중이라고 보여주기
    // const [loading, setLoading] = useState(false);
    // if (loading) {
    //     return <ChannelListBlock>대기중...</ChannelListBlock>
    // }
    // if (!articles) {
    //     return null;
    // }

    // 여기서 받아와서 channelTemplate 6개로 나눔
    return (
        <ChannelListBlock>
            <div className="channel-top-block">
                <ChannelTemplate
                    kind={channelInfo['0'].kind}
                    key={channelInfo['0'].id}
                >
                    <ChannelList info={channelInfo['0'].info} />
                </ChannelTemplate>
                <ChannelTemplate
                    kind={channelInfo['1'].kind}
                    key={channelInfo['1'].id}
                >
                    <ChannelList info={channelInfo['1'].info} />
                </ChannelTemplate>
                <ChannelTemplate
                    kind={channelInfo['2'].kind}
                    key={channelInfo['2'].id}
                >
                    <ChannelList info={channelInfo['2'].info} />
                </ChannelTemplate>
            </div>
            <div className="channel-bottom-block">
                <ChannelTemplate
                    kind={channelInfo['3'].kind}
                    key={channelInfo['3'].id}
                >
                    <ChannelList info={channelInfo['3'].info} />
                </ChannelTemplate>
                <ChannelTemplate
                    kind={channelInfo['4'].kind}
                    key={channelInfo['4'].id}
                >
                    <ChannelList info={channelInfo['4'].info} />
                </ChannelTemplate>
                <ChannelTemplate
                    kind={channelInfo['5'].kind}
                    key={channelInfo['5'].id}
                >
                    <ChannelList info={channelInfo['5'].info} />
                </ChannelTemplate>
            </div>
        </ChannelListBlock>
    );
};

export default ChannelTemplatContainer;

// {
//     channelInfo.map(
//         (channelList) =>
//             (channelList.id % 2 === 0?
//                 <ChannelTemplate kind={channelList.kind} key={channelList.id} >
//                     <ChannelList info={channelList.info}/>
//                 </ChannelTemplate>
//                 :
//                 <ChannelTemplate kind={channelList.kind} key={channelList.id} >
//                     <ChannelList info={channelList.info}/>
//                 </ChannelTemplate>
//             )
//     )
// }
