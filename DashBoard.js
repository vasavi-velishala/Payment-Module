import React from 'react';
import {getPayments} from '../actions/actions';
import ListPaymentComponent from './ListPaymentComponent';
import {connect} from 'react-redux';

const DashBoard = (props) =>{
    props.fetchPayments();
    return(
    <div className='container__list'>
        
        <ListPaymentComponent />
    </div>
);}

const mapDispatchToStore = (dispatch) => {
    return {
        fetchPayments: () => dispatch(getPayments())
    }
}

export default connect(null,mapDispatchToStore)(DashBoard);
