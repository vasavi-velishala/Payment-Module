import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';

class UpdatePaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentId: this.props.match.params.paymentId,
            // paymentId: '',
           status:'',
            amount: '',
            type1: '',
        
        }
        this.changepaymentIdHandler = this.changepaymentIdHandler.bind(this);
        this.changepaymentStatusHandler = this.changepaymentStatusHandler.bind(this);
        this.changepaymentAmountHandler = this.changepaymentAmountHandler.bind(this);
        this.changepaymentType1Handler = this.changepaymentType1Handler.bind(this);
        
        this.updatePayment = this.updatePayment.bind(this);
    }

    componentDidMount(){
        PaymentService.getPaymentById(this.state.paymentId).then( (res) =>{
            let payment = res.data;
            this.setState({paymentId: payment.paymentId,
                status:payment.status,
               amount: payment.amount,
                type1 : payment.type1,
               
               
            });
        });
    }

    updatePayment = (e) => {
        e.preventDefault();
        let payment = {paymentId: this.state.paymentId,status: this.state.status,  amount: this.state.amount, type1: this.state.type1 };
        console.log('payment => ' + JSON.stringify(payment));
        console.log('paymentId => ' + JSON.stringify(this.state.paymentId));
        PaymentService.updatePayment(payment, this.state.paymentId).then( res => {
            this.props.history.push('/payments');
        });
    }
    
    changepaymentIdHandler= (event) => {
        //alert("paymentId"+event.target.value)
        this.setState({paymentId: event.target.value});
    }
    changepaymentStatusHandler= (event) => {
        //alert("paymentStatus"+event.target.value)
        this.setState({status: event.target.value});
    }

    changepaymentAmountHandler= (event) => {
      //  alert("paymentAmount"+event.target.value)
        this.setState({amount: event.target.value});
    }

    changepaymentType1Handler= (event) => {
      //  alert("paymentType1"+event.target.value)
        this.setState({type1: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/payments');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "paymentd col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Payment</h3>
                                <div className = "paymentd-body">
                                    <form>
                                    <div className = "form-group">
                                            <label>Payment Id: </label>
                                            <input placeholder="Payment Id" required className="form-control" 
                                                value={this.state.paymentId} onChange={this.changepaymentIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Payment Status: </label>
                                            <input placeholder="Payment Status" required className="form-control" 
                                                value={this.state.status} onChange={this.changepaymentStatusHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Payment Amount: </label>
                                            <input placeholder="Payment Amount" required className="form-control" 
                                                value={this.state.amount} onChange={this.changepaymentAmountHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Payment Type1: </label>
                                            <input placeholder="Payment Type1" required className="form-control" 
                                                value={this.state.type1} onChange={this.changepaymentType1Handler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.updatePayment}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdatePaymentComponent