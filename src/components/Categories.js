import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';
import SearchSubscriberContainer from '../containers/search/subscriber/SearchSubscriberContainer';

const categories = [
    {
        name: 'channelRank',
        text: '채널 순위',
    },
    {
        name: 'subscriberRank',
        text: '구독자 순위',
    },
    {
        name: 'videoRank',
        text: '영상순위',
    },
    {
        name: 'advertiseMarket',
        text: '마켓',
    },
];

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        /* border-bottom: 2px solid #22b8cf; */
        color: #db4455;
        &:hover {
            color: #db4455;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Categories = () => {
    return (
        <div>
            {/* {categories.map((c) => (
                <Category
                    key={c.name}
                    activeClassName="active"
                    exact={c.name === 'searchChannelRank'}
                    to={
                        c.name === 'searchChannelRank'
                            ? '/search'
                            : `/search/${c.name}`
                    }
                >
                    {c.text}
                </Category>
            ))} */}
            <Category to="/search/channel">{categories['0'].text}</Category>
            <Category to="/search/subscriber">{categories['1'].text}</Category>
            <Category to="/search/video">{categories['2'].text}</Category>
            <Category to="/search/market">{categories['3'].text}</Category>

            {/* 여기서 이 거 가지고 match 이용하고 api도 화면도 바꿔주자
             <Route path="/search/video" component={SearchRankContainer} /> */}

            <Route path="/search/:type" component={SearchSubscriberContainer} />
        </div>
    );
};
export default Categories;
