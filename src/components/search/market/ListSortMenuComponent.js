import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListSortMenuComponentBlock = styled.div`
    width: 1080px;
    font-family: noto sans;
    /* font-weight: 400; */
    /* letter-spacing: 0; */
    display: flex;
    justify-content: space-between;
    .sort-list-wrap {
        .count-number {
            font-size: 12px;
        }
        .sort-list {
            display: flex;
            line-height: 18px;
            letter-spacing: -0.3px;
            cursor: pointer;
            li {
                /* text-decoration: none; */
                padding-right: 5px;
                list-style: none;
                .sort-menu {
                    font-size: 13px;
                    color: #999;
                    text-decoration: none;
                }
            }
        }
    }
`;

const ListSortMenuComponent = () => {
    const count = 270;
    return (
        <ListSortMenuComponentBlock>
            <p className="count-number">총 {count} 건</p>
            <div class="sort-list-wrap">
                <ul class="sort-list">
                    <li>
                        <Link className="sort-menu">추천순</Link>
                    </li>

                    <li>
                        <Link className="sort-menu">|&nbsp;&nbsp;인기순</Link>
                    </li>
                    <li>
                        <Link className="sort-menu">
                            |&nbsp;&nbsp;낮은 가격순
                        </Link>
                    </li>
                    <li>
                        <Link className="sort-menu">
                            |&nbsp;&nbsp;높은 가격순
                        </Link>
                    </li>
                </ul>
            </div>
        </ListSortMenuComponentBlock>
    );
};
export default ListSortMenuComponent;
