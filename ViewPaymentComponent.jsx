import React, { Component } from 'react'
import PaymentService from '../services/PaymentService'

class ViewPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            paymentId: this.props.match.params.paymentId,
            payment: {}
        }
    }

    componentDidMount(){
       PaymentService.getPaymentById(this.state.paymentId).then( res => {
           this.setState({payment: res.data});
       })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Payment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                        <label> PaymentId: <input value={ this.state.payment.paymentId } /></label>
                            
                        </div>
                        <div className = "row">
                            <label> Payment Status:<input value={ this.state.payment.status } /></label>
                           
                        </div>
                        <div className = "row">
                            <label> Payment Amount:<input value={ this.state.payment.amount }/> </label>
                           
                        </div>
                        <div className = "row">
                            <label> Payment Type:<input value={ this.state.payment.type1 }/> </label>
                            
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default ViewPaymentComponent
