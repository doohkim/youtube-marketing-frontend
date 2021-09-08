import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const categories = [
    {
        name:'searchChannelRank',
        text: '채널 순위'
    },
    {
        name: 'searchSubscriberRank',
        text: '구독자 순위'
    },
    {
        name: 'searchSubscriberSoaringRank',
        text: '구독자 급상승 순'
    },
]

const Category = styled(NavLink)`
    font-size:1.125rem;
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
        color: #DB4455;
        &:hover {
            color: #DB4455;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`

const Categories = () => {
    return (
        <div>
            {
                categories.map(
                    c => (
                        <Category
                            key={c.name}
                            activeClassName="active"
                            exact={c.name === 'searchChannelRank'}
                            to={c.name === 'searchChannelRank' ? '/search' : `/search/${c.name}`}
                        >{c.text}
                        </Category>

                    )
                )
            }
        </div>
    )
}
export default Categories;