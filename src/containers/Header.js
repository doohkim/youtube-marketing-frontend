import React from 'react'
import styled from 'styled-components';
import HeaderBlock from './HeaderBlock';


const HeaderContainer = styled.div`
    width: 100%;
    height: 150px;
    background: white;
    display: flex;
    justify-content: center;

`;

const Header = () => {
    return(
            <HeaderContainer>
                <HeaderBlock />
            </HeaderContainer>
    )
}
export default Header;