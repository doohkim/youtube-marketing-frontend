import React from 'react';
import styled from 'styled-components';
import Categories from '../components/Categories';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const BottomHeaderBlockContainer = styled.div`
    width: 1080px;
    /* height: 1000px; */
    display: flex;
    padding: 1rem;
    /* margin: 0 auto; */
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
    .cart_item {
        padding-right: 3rem;
        width: 64px;
        img {
            width: 64px;
            height: 64px;
        }
    }
`;

const BottomHeader = () => {
    return (
        <BottomHeaderBlockContainer>
            <Categories />
            <Link to="/list" className="cart_item">
                <FaShoppingCart />
            </Link>
        </BottomHeaderBlockContainer>
    );
};

export default BottomHeader;
