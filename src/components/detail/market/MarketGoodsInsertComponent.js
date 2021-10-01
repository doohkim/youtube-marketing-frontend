import React, { useCallback } from 'react';
import styled from 'styled-components';

const MarketGoodsInsertComponentWrap = styled.form`
    width: 560px;
    height: 47px;
    position: relative;
    border-top: 1px solid #f4f4f4;
    padding-top: 10px;
    /* select {
        width: 410px;
        height: 40px;
    } */
    .tit {
        float: left;
        width: 150px;
        font-size: 14px;
        color: #666;
        line-height: 20px;
    }
    select {
        overflow-y: auto;
        width: 410px;
        height: 40px;
        top: 39px;
        max-height: 401px;
    }
`;

const MarketGoodsInsertComponent = ({ input, onInsert, onChangeInput }) => {
    const onChange = useCallback(
        (e) => {
            onInsert(e.target.value);
            onChangeInput('상품선택');
        },
        [onChangeInput],
    );
    const product_list = [
        {
            id: 1,
            name: '핫 치킨 브리또',
            price: 2900,
        },
        {
            id: 2,
            name: '청양마요 브리또',
            price: 2900,
        },
        {
            id: 3,
            name: '양마요 브리또',
            price: 2900,
        },
    ];
    // div로 select 만드는것 고려
    return (
        <MarketGoodsInsertComponentWrap>
            <strong className="tit">상품 선택</strong>
            <select onChange={onChange} value={input}>
                <option value="" hidden>
                    상품 선택
                </option>
                {product_list.map((product) => (
                    <option key={product.id} value={product.name}>
                        &nbsp;
                        {`${product.name} ${product.price}원`}
                    </option>
                ))}
            </select>
        </MarketGoodsInsertComponentWrap>
    );
};
export default MarketGoodsInsertComponent;
