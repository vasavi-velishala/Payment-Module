import React, { Component } from 'react'
import PaymentService from '../services/PaymentService';

class CreatePaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            paymentId: this.props.match.params.paymentId,
            status: '',
            amount: '',
            type1: '',
            errors:{}

        }
        
        this.changepaymentIdHandler = this.changepaymentIdHandler.bind(this);
        this.changepaymentStatusHandler = this.changepaymentStatusHandler.bind(this);
        this.changepaymentAmountHandler = this.changepaymentAmountHandler.bind(this);
        this.changepaymentType1Handler = this.changepaymentType1Handler.bind(this);
        this.saveOrUpdatePayment = this.saveOrUpdatePayment.bind(this);
    }

    componentDidMount() {

        // step 4
        alert(this.state.paymentId)
        PaymentService.getPaymentById(this.state.paymentId).then((res) => {
            let payment = res.data;
            this.setState({
                paymentId: payment.paymentId,
                status: payment.status,
                amount: payment.amount,
                type1: payment.type1,


            });
        });
    }
    validate() {
        let isValid = true;
        let errors = {};
        if (!this.state.paymentId) {
            errors["paymentId"] = "Payment Id should not be blank";
            isValid = false;
        }
        if (!this.state.amount) {
            errors["amount"] = "Amount should not be blank";
            isValid = false;
        }
        if (!this.state.status) {
            errors["status"] = "Status should not be blank";
            isValid = false;
        }
        if (!this.state.type1) {
            errors["type1"] = "Type should not be blank";
            isValid = false;
        }

        // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+))|("[\w-\s]+")([\w-]+(?:\.[\w-]+)))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // if (this.state.emailId && !pattern.test(this.state.emailId)) {
        //     isValid = false;
        //     errors["emailId"] = "Please enter valid email address.";
        // }
        this.setState({
            errors: errors
        })

        return isValid;
    }



    saveOrUpdatePayment = (e) => {
        e.preventDefault();
        //alert("hi");
        let payment = { paymentId: this.state.paymentId, status:this.state.status, amount: this.state.amount, type1: this.state.type1};
        // step 5
        if (this.state.paymentId === '_add') {
            PaymentService.createPayment(payment).then(res => {
                this.props.history.push('/payments');
            });
        } else {
            PaymentService.updatePayment(payment, this.state.paymentId).then(res => {
                this.props.history.push('/payments');
            });
        }
    }

    changepaymentIdHandler = (event) => {
        // alert("fName"+event.target.value)
        this.setState({ paymentId: event.target.value });
    }
    changepaymentStatusHandler = (event) => {
        // alert("fName"+event.target.value)
        this.setState({ status: event.target.value });
    }

    changepaymentAmountHandler = (event) => {
        //  alert("lName"+event.target.value)
        this.setState({ amount: event.target.value });
    }

    changepaymentType1Handler = (event) => {
        //  alert("email"+event.target.value)
        this.setState({ type1: event.target.value });
    }



    cancel() {
        this.props.history.push('/payments');
    }
    onSubmit(e) {
        e.preventDefault();
        let payment = { paymentId: this.state.paymentId,status:this.state.status,  amount: this.state.amount, type1: this.state.type1};

        if (this.validate())  {
            alert('in validate')
    this.setState((state) => ({  ...state,errors: {} }));
    this.props.onSubmitPayment(
        
        {
                    paymentId: this.state.paymentId,
                    status: this.state.status,
                    amount: this.state.amount,
                    type1: this.state.type1


                },

            );
            // 
        }

    }

    getTitle() {
        if (this.state.paymentId === '_add') {
            return <h3 className="text-center">Add payment</h3>
        } else {
            return <h3 className="text-center">Update payment</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="paymentd col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="paymentd-body">
                                <form onSubmit={this.onSubmit} className='add-payment-form' >
                                    <div className="form-group">
                                        <label> payment Id: </label>
                                        <input placeholder="Payment Id" required className="form-control"
                                            value={this.state.paymentId} onChange={this.changepaymentIdHandler} />
                                    </div>
                                     <div style={{ color: 'red' }}>
                                            {this.state.errors.paymentId && <i className="m-1 text-danger">{this.state.errors.paymentId}</i>}
                                        
                                        </div>

                                    <div className="form-group">
                                        <label> payment Status: </label>
                                        <input placeholder="Payment Status" required className="form-control"
                                            value={this.state.status} onChange={this.changepaymentStatusHandler} />
                                            </div>
                                            <div style={{ color: 'red' }}>
                                            {this.state.errors.status && <i className="m-1 text-danger">{this.state.errors.status}</i>}
                                        </div>
                                    
                                    <div className="form-group">
                                        <label> Payment Amount: </label>
                                        <input placeholder="Payment Amount" required className="form-control"
                                            value={this.state.amount} onChange={this.changepaymentAmountHandler} />
                                            </div>
                                            <div style={{ color: 'red' }}>
                                            {this.state.errors.amount && <i className="m-1 text-danger">{this.state.errors.amount}</i>}
                                        </div>
                                    
                                    <div className="form-group">
                                        <label> payment Type1: </label>
                                        <input placeholder="Payment Type1" required className="form-control"
                                            value={this.state.type1} onChange={this.changepaymentType1Handler} />
                                             </div>
                                            <div style={{ color: 'red' }}>
                                            {this.state.errors.type1 && <i className="m-1 text-danger">{this.state.errors.type1}</i>}
                                        </div>
                                   






                                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                                    <button className="btn btn-success" onClick={this.saveOrUpdatePayment}>UpdateNSave</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePaymentComponent