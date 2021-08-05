import axios from '../axios/axios';

const _addPayment = (payment) => ({
    type: 'ADD_PAYMENT',
    payment
});


export const addPayment = (paymentData = {
    paymentId: '',
    amount: '',
    status:'',
    type1:''
  
}) => {
    return (dispatch) => {
     console.log("in add pay action pymntdata "+paymentData.status)
        const payment = {
            paymentId: paymentData.paymentId,
            amount: paymentData.amount,
            status:paymentData.status,
            type1:paymentData.type1
        };
       console.log("pymnt dispatch"+payment.amount)
        return axios.post('payments', payment).then(result => {
            dispatch(_addPayment(result.data));
            dispatch(getPayments());
        });
    };
};
const _editPayment = (paymentId, updates) => ({
    type: 'EDIT_PAYMENT',
    paymentId,
    updates
});

export const editPayment = (paymentId, updates) => {
    return (dispatch) => {
        return axios.put(`payments/${paymentId}`, updates).then(() => {
            dispatch(_editPayment(paymentId, updates));
        });
    }
};
const _removePayment = ({ paymentId } = {}) => ({
    type: 'REMOVE_PAYMENT',
    paymentId
});

export const removePayment = (paymentId) => {
    console.log("id"+paymentId);
    return (dispatch) => {
        return axios.delete(`payments/${paymentId}`).then(() => {
            dispatch(_removePayment({ paymentId }));
            dispatch(getPayments());
        })
    }
}
 const _getPayments = (payments) => ({
     type: 'GET_PAYMENTs',
     payments
 });

export const getPayments = () => {
    return (dispatch) => {
        return axios.get('payments').then(result => {
            const payments = [];

            result.data.forEach(item => {
                payments.push(item);
            });

            dispatch(_getPayments(payments));
        });
    };
};