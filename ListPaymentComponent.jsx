import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removePayment } from '../actions/actions';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { lightGreen, blue, purple, pink } from "@material-ui/core/colors";
import ContainedButtons from './ContainedButtons';
import CustomizedTables from './CustomizedTables';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
  const styles = theme => ({
    root: {
      width: '80%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 500,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });
class ListPaymentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payments: [],
            flag:false
    }
       this.addPayment = this.addPayment.bind(this);
       this.editPayment = this.editPayment.bind(this);
       this.deletePayment = this.deletePayment.bind(this);
    }

    deletePayment(paymentId){
       this.props.dispatch(removePayment(paymentId))
    }
    addPayment(){
      if(window.confirm("adding"));
       // this.props.history.push('/add-payment/_add');
        this.props.history.push('/addpayment');
    }
        
    viewPayment(paymentId){
        this.props.history.push(`/view-payment/${paymentId}`);
    }
    editPayment(paymentId){
      alert(paymentId)
      this.props.history.push(`/update-payment/${paymentId}`);
  }
 
    componentDidMount(){
     this.setState({payments:this.props.payments})  
    }
    render() {
        return (
            <div>
                 <h2 align="center" className="text-center">Payments List</h2>
                 <div className = "row">
                 <Button variant="contained" color="primary" onClick={this.addPayment} className="btn btn-info"> Add Payment</Button>
                 </div>
                 <br></br>
                 
                        {/*<CustomizedTables clickHandler={this.edit1Payment}>

                        </CustomizedTables>*/}
                       <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Payment Id</StyledTableCell>
            <StyledTableCell align="right">Payment Status</StyledTableCell>
            <StyledTableCell align="right">Payment Amount</StyledTableCell>
            <StyledTableCell align="right">Payment Type</StyledTableCell>
           
            {/* <StyledTableCell align="right"></StyledTableCell> */}
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">View</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {this.props.payments.map((payment) => (
            <StyledTableRow key={payment.id}>
             
              <StyledTableCell align="right">{payment.paymentId}</StyledTableCell>
              <StyledTableCell align="right">{payment.status}</StyledTableCell>
              <StyledTableCell align="right">{payment.amount}</StyledTableCell>
              <StyledTableCell align="right">{payment.type1}</StyledTableCell>
              
              <StyledTableCell align="right">   <Button color="primary" variant="contained" onClick={ () => 
                                                this.editPayment(payment.paymentId)} className="btn btn-info">Update </Button></StyledTableCell> 
              <StyledTableCell align="right"><Button color="primary" variant="contained" onClick={ () => this.deletePayment(payment.paymentId)} className="btn btn-danger">Delete </Button></StyledTableCell>                                 
            
              <StyledTableCell align="right"><Button color="primary" variant="contained" onClick={ () => this.viewPayment(payment.paymentId)} className="btn btn-danger">View </Button></StyledTableCell>                                 
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                      
                 </div>
            
        )
    }
}

//export default ListPaymentComponent

const mapStateToProps = (state) => {
    return {
        payments: state
    };
}
const matchDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      edit: () => dispatch({ type: 'EDIT_FIRST_PAYMENT' })
      
    }
  }


//export default connect(mapStateToProps)(ListPaymentComponent);
export default withRouter(connect(mapStateToProps)(ListPaymentComponent));