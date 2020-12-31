//js

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/05week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/04week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/03week

//https://github.com/listenToRipley/javascript-workbook/tree/gh-pages/01week

//backend

//https://github.com/listenToRipley/311_checkpoint_1
//https://github.com/listenToRipley/311_wk4_day2_node_mysql
//https://github.com/listenToRipley/311_wk5_both_api_hackathon

//https://github.com/listenToRipley/311_wk4_day2_node_mysql/blob/master/controllers/users.js

//https://github.com/AustinCodingAcademy/311_wk6_day2_authentication/blob/master/index.js
import React from 'react'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/theme/material.css';

const CodeSamples = () => {

 let ref='https://raw.githubusercontent.com/listenToRipley/javascript-workbook/gh-pages/05week/bankAccount.js'

  return (
    <div>
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
    </div>
  )
}

export default CodeSamples 