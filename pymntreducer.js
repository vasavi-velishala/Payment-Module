const paymentsReducerDefaultState = [];

export default (state = paymentsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return [
                ...state,
                action.payments
            ];
        
     case 'REMOVE_PAYMENT':
             return state.filter(({ paymentId }) => paymentId !== action.paymentId);
        
//      case 'EDIT_FIRST_PAYMENT':
//              return state.map((payment)=>payment.id === action.id ? {...payment,editing:!payment.editing}:payment)
    
//     case 'EDIT_PAYMENT':
//             return state.map((payment) => {
//                 alert("hi")
//                 if (payment.id === action.id) {
//                     return {
//                         ...payment,
//                         ...action.updates
//                     };
//                 } else {
//                     return payment;
//                 }
//             });

        case 'GET_PAYMENTs':
            return action.payments;
        default:
            return state;
    }
};