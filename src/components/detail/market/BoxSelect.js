import React from 'react';
import styled from 'styled-components';

const BoxSelectWrap = styled.form`
    width: 560px;
    height: 47px;
    position: relative;
    /* select {
        width: 410px;
        height: 40px;
        ㅣㅑ
    } */
    select {
        overflow-y: auto;
        width: 410px;
        height: 40px;
        top: 39px;
        max-height: 401px;
    }
`;

const BoxSelect = () => {
    return (
        <BoxSelectWrap>
            <strong>상품 선택</strong>
            <select>
                <option value="0">손흥민</option>
                <option value="1">라멜라</option>
                <option value="2">케인</option>
                <option value="3">이영표</option>
            </select>
        </BoxSelectWrap>
    );
};
export default BoxSelect;
