import client from './client';

export const createPayment = ({
    order_items,
    jumin,
    cardPwd,
    cardAvailMonthYear,
    cardNumber,
}) => {
    return client.post(
        `/orders/`,
        { order_items, jumin, cardPwd, cardAvailMonthYear, cardNumber },
        {
            headers: {
                Authorization: `Token ${sessionStorage.getItem('token')}`,
            },
        },
    );
};

export const getPayment = (id) => {
    return client.get(`/orders/detail/${id}/`, {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};

export const cancelPayment = (id) => {
    return client.get(`/orders/cancel/${id}/`, {
        headers: {
            Authorization: `Token ${sessionStorage.getItem('token')}`,
        },
    });
};
