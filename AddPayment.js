import React from 'react';
import AddPaymentComponent from './AddPaymentComponent';
import { connect } from 'react-redux';
import { addPayment } from '../actions/actions';

const AddPayment = (props) => (
    <div >
        <h3>Set Payment information:</h3>
        <AddPaymentComponent payment={props.payment}
            handleCancel={()=>{props.history.push('/');}}
            onSubmitPayment={(payment) => {
                console.log(payment.paymentId+payment.amount+payment.status+payment.type1)
                props.dispatch(addPayment(payment));
                props.history.push('/');
            }}
        />
    </div>
);
//export default connect()(AddPayment);

const mapStateToProps = (state,props) => {
    return {
                    payment:state
    };
};

export default connect(mapStateToProps)(AddPayment);

