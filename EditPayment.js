import React from 'react';
//import BookForm from './BookForm';
import PaymentForm from './PaymentForm';
import { connect } from 'react-redux';
//import { editBook } from '../actions/books';
import { editPayment } from '../actions/actions';

const EditPayment = (props) =>{ 
    if(props.flag) return(
    <div className='container__box'>
        <PaymentForm 
            payment={props.payment}
            onSubmitPayment={(payment) => {
                props.dispatch(editPayment(props.payment.paymentId, payment));
                props.history.push('/');
            }}
        />
    </div>
);else return<div>Payment Details</div> }; 

const mapStateToProps = (state, props) => {
    if(props.flag)
    return {
        payment: state.find((payment) =>
            payment.paymentId === props.match.params.paymentId)
    };
    else return;
};

export default connect(mapStateToProps)(EditPayment);