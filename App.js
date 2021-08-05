import logo from './logo.svg';
import './App.css';
import CreatePaymentComponent from './components/CreatePaymentComponent';
//import UpdatePaymentComponent from './components/UpdatePaymentComponent';
//import ViewPaymentComponent from './components/ViewPaymentComponent';
import EditPayment from './components/EditPayment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import DashBoard from './components/DashBoard';
//import ListPaymentComponent from './components/ListPaymentComponent';
import AddPayment from './components/AddPayment';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import CreatePaymentComponent from './components/CreatePaymentComponent';
//import UpdatePaymentComponent from './components/UpdatePaymentComponent';
import ViewPaymentComponent from './components/ViewPaymentComponent';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" component={DashBoard} exact={true}></Route>
            <Route path="/payments" component={DashBoard} ></Route>
            <Route path="/addpayment" component={AddPayment} />
            <Route path="/paymentadd/:id" component={AddPayment} />
            <Route path="/edit-payment/:id" component={CreatePaymentComponent}></Route>
            <Route path="/addedit/:id" component={EditPayment}></Route>

            {/* <Route path = "/update-payment/:id" component = {UpdatePaymentComponent}></Route> */}
            <Route path="/update-payment/:paymentId" component={CreatePaymentComponent}></Route>
            <Route path="/view-payment/:paymentId" component={ViewPaymentComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
