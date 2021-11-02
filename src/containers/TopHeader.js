import React from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';

import HeaderSearch from './HeaderSearch';
const TopHeaderBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 1048px;
    height: 50px;
    /* background: red; */
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center; // 세로 중앙 정렬
        /* width: 150px; */
        height: 4rem;
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .profile {
        display: flex;
        align-items: center; // 세로 중앙 정렬
        width: 150px;
        height: 48px;
        font-size: 1.25rem;
    }
`;
const UserInfo = styled.div`
    font-weight: 800;
    margin-right: 1rem;
`;
const TopHeader = ({ user }) => {
    return (
        <TopHeaderBlock>
            <Link to="/" className="logo">
                LUMEN
            </Link>
            <HeaderSearch />
            {user ? (
                <div className="profile">
                    <UserInfo>{user.username}</UserInfo>
                    <Button>로그아웃</Button>
                </div>
            ) : (
                <div className="profile">
                    <Button to="/login">로그인</Button>
                </div>
            )}
        </TopHeaderBlock>
    );
};

export default TopHeader;
