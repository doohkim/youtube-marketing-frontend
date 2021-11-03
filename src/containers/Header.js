import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../modules/user';
import HeaderBlock from './HeaderBlock';

const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    background: white;
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Header = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));

    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    return (
        <HeaderContainer>
            <HeaderBlock user={user} onLogout={onLogout} />
        </HeaderContainer>
    );
};
export default Header;
