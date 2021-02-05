import React from 'react'
import { makeStyles } from '@material-ui/core';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/material.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({ 
  body:{
    color: 'white'
  }
})

const SampleBank = () => {

const classes = useStyles();

  return (
    <div className={classes.body}>
    <Typography 
    align='right' 
    variant='h6'
    >Sample bank account</Typography>
    <Typography 
    align='right'
    >Create a basic bank account using Javascript</Typography>
    <CodeMirror
    value='
    class BankAccount { &
    constructor(accountNumber, owner) { &
    this.accountNumber = accountNumber; &
    this.owner = owner;
    this.transactions = [];
    &
    &
    balance() { &
    
    let tally = this.transactions.map((event) => { &
      return event.amount &
    }) &
    &
    let balance = tally.reduce((curr, sum) => { &
     &
     return curr + sum}, 0);
      &
     return balance

   } &
  } &
 &
  deposits(amount) { &

    let payee = this.owner &

    this.transactions.push(new Transaction(amount, payee)) &
  } &
 &
  charge(aTransaction) { &
 &
    if (this.balance() <= 0 || this.balance() < this.amount || this.balance()  === `this is a new account, a deposit has not yet been made`) { &
      return `insufficient funds` &
    } else { &
    return this.transactions.push(aTransaction) &
  } } } &
  &
  &
  class Transaction { &
  constructor(amount, payee) { &
    this.date = new Date() &
    this.amount = amount; &
    this.payee = payee; &
  }  &
 } &

let myAccount = new BankAccount(123244, `Natalie Kendrick`)  &
 &
 let yourAccount = new BankAccount(234236, `Willie Nelson`) &
 &
 let silverSea = new Transaction(-313, `Silver Sea`) &
 let pTerrys = new Transaction(-24.53, `P.Terry\s`) &
 & 
  myAccount.deposits(1231) &
  &
  myAccount.charge(silverSea) &
  & myAccount.charge(pTerrys)
 & 
 & 
  console.log(myAccount.balance())

    '
    options={{
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
      lineSeparator: '&'
    }}
/>
  <Typography>View with on <a href='https://github.com/listenToRipley/javascript-workbook/blob/gh-pages/05week/bankAccount.js'>Github</a></Typography>
    </div>
  )
}

export default SampleBank