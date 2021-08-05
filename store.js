import { createStore, applyMiddleware } from "redux";
import payments from '../reducers/pymntreducer';
import thunk from 'redux-thunk';
export default () => {
    alert("called");
    return createStore(payments, applyMiddleware(thunk));
};