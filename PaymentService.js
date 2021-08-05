import axios from 'axios';

const PAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/payments";

class PaymentService {

    getPayment(){
        return axios.get(PAYMENT_API_BASE_URL);
    }

    createPayment(payment){
        return axios.post(PAYMENT_API_BASE_URL, payment);
        
    }

    getPaymentById(paymentId){
        return axios.get(PAYMENT_API_BASE_URL + '/' + paymentId);
    }

    updatePayment(payment, paymentId){
        //alert("in update paymentService")
        return axios.put(PAYMENT_API_BASE_URL + '/' + paymentId, payment);
    }

    deletePayment(paymentId){
        return axios.delete(PAYMENT_API_BASE_URL + '/' + paymentId);
    }
}

export default new PaymentService()