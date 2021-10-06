import React from 'react';
import { MdRemoveCircleOutline } from 'react-icons/md';
import styled from 'styled-components';
const ProductItemBlock = styled.div`
    width: 410px;
    height: 70px;
    display: flex;
    align-items: center;
    border: 1px solid #f4f4f4;
    &:nth-child(even) {
        background: #f8f9fa;
    }
    .product-name {
        width: 383px;
        height: 20px;
        flex: 1;
        display: flex;
        align-items: center;
        .text {
            margin-left: 0.5rem;
        }
    }
    .counter-wrap {
        display: flex;
        width: 90px;
        height: 28px;
        .number {
            width: 28px;
            height: 28px;
            text-align: center;
        }
    }
`;
const MarketSelectedProductItemComponent = ({
    product,
    onRemove,
    onDecrease,
    onIncrease,
}) => {
    const { id, text, number } = product;
    return (
        <ProductItemBlock>
            <div className="product-name">
                <div className="text">{text}</div>
            </div>
            <div className="counter-wrap">
                <button onClick={() => onIncrease(id)}>+</button>
                <div className="number">{number}</div>
                <button onClick={() => onDecrease(id)}>-</button>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </ProductItemBlock>
    );
};
export default MarketSelectedProductItemComponent;
