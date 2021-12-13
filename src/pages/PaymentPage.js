import React from 'react';
import Header from '../containers/Header';
import PaymentCompletedContainer from '../containers/payment/PaymentCompletedContainer';

const PaymentPage = () => {
    return (
        <div>
            <Header />
            <PaymentCompletedContainer />
        </div>
    );
};
export default PaymentPage;
