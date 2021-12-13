import React from 'react';
import styled from 'styled-components';
import CardComponent from '../../components/payment/CardComponent';
import PersonalAgreeComponent from '../../components/payment/PersonalAgreeComponent';
import ShippingComponent from '../../components/shipping/ShippingComponent';

const PaymentContainerBlock = styled.div`
    width: 1080px;
    display: flex;
    .payment-data {
        width: 742px;
        height: auto;
    }
`;

const PaymentContainer = ({
    onChangeField,
    agree,
    setAgree,
    loading,
    order,
    orderError,
    getTotalAmount,
}) => {
    if (orderError) {
        <PaymentContainerBlock>에러가 발생했습니다.</PaymentContainerBlock>;
    }
    if (loading || !order) {
        <PaymentContainerBlock>{null}</PaymentContainerBlock>;
    }
    return (
        <PaymentContainerBlock>
            <div className="payment-data">
                {/* <CouponComponent /> */}
                {/* <PaymentComponent /> */}
                <CardComponent onChangeField={onChangeField} />
                <PersonalAgreeComponent setAgree={setAgree} agree={agree} />
            </div>
            <ShippingComponent order={order} getTotalAmount={getTotalAmount} />
        </PaymentContainerBlock>
    );
};
export default PaymentContainer;
