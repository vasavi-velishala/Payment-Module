import React from 'react';

export default class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        this.onpaymentIdChange = this.onpaymentIdChange.bind(this);
        this.onamountChange = this.onamountChange.bind(this);
        this.onstatusChange = this.onstatusChange.bind(this);
        this.ontype1Change = this.type1Change.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            flag:false,
            paymentId: '',
            amount: '',
            status:'',
            type1:'',
             
            error: ''
        };
    }

    onpaymentIdChange(e) {
        const paymentId = e.target.value;
        this.setState((state) => ({ ...state, paymentId: paymentId }));
    }

    onamountChange(e) {
        const amount = e.target.value;
        this.setState((state) => ({ ...state, amount: amount }));
    }
    onstatusChange(e) {
        const status = e.target.value;
        this.setState((state) => ({ ...state, status: status }));
    }

    ontype1Change(e) {
        const type1 = e.target.value;
        this.setState((state) => ({ ...state, type1: type1 }));
    }
   

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.paymentId || !this.state.amount || !this.state.status || !this.state.type1  ) {
            this.setState((state) => ({ ...state, error: "Please input all the required values " }));
        } else {
            this.setState((state) => ({ ...state, error: '' }));
            this.props.onSubmitPayment(
                {
                    paymentId: this.state.paymentId,
                    amount: this.state.amount,
                    status : this.state.status,
                    type1 : this.state.type1
                    
                }
            );
        }
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.onSubmit} className="form-group m-4">           
                    <input className="form-control m-1 w-50" required type="text" placeholder="Enter paymentId here..." value={this.state.paymentId} onChange={this.onpaymentIdChange}/>
                    <input className="form-control m-1 w-25" required type="text" placeholder="Enter amount here..."  value={this.state.amount} onChange={this.onamountChange}/>
                    <input className="form-control m-1 w-50"  required type="text"  placeholder="Enter status here..." value={this.state.status} onChange={this.onstatusChange}/>
                    <input className="form-control m-1 w-50"  required type="text"  placeholder="Enter type1 here..." value={this.state.type1} onChange={this.ontype1Change}/>
                    
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                    <button className="btn btn-primary m-1 w-25">Edit Payment</button>
                </form>
            </div>
        );
    }
}