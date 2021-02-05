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

const SampleController = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography
        align='right' 
        variant='h6'>
        Routes & Controller Example
      </Typography>
      <Typography>Basic queries created for controller using mySQL</Typography>
      <CodeMirror
        value='

const mysql = require(`mysql`) &
const pool = require(`../sql/connection`) &
const { handleSQLError } = require(`../sql/error`) &

const getAllUsers = (req, res) => { &
  // SELECT ALL USERS &
  pool.query("SELECT * FROM users", (err, rows) => { 
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getUserById = (req, res) => { &
  // SELECT USERS WHERE ID = <REQ PARAMS ID> &
  let sql = "SELECT * FROM users WHERE id = ? " &
  // WHAT GOES IN THE BRACKETS &
  sql = mysql.format(sql, [req.params.id]) &

  pool.query(sql, (err, rows) => { &
    if (err) return handleSQLError(res, err) &
    return res.json(rows); &
  }) &
} &

const createUser = (req, res) => { &
  // INSERT INTO USERS FIRST AND LAST NAME  &
  let sql = "INSERT INTO users (first_name, last_name)  VALUES (?, ?)" &
  // WHAT GOES IN THE BRACKETS &
  // console.log(req.body) &
  // console.log(`first name: `, req.body.first_name, ` & last name:`,req.body.last_name) &
  sql = mysql.format(sql, [req.body.first_name, req.body.last_name]) &

  pool.query(sql, (err, results) => { &
    if (err) return handleSQLError(res, err) &
    return res.json({ newId: results.insertId }); &
  })  &
} &

const updateUserById = (req, res) => { &
  // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID> &
  let sql = "UPDATE users SET first_name= ?, last_name =? WHERE id = ?" &
  // WHAT GOES IN THE BRACKETS &
  // console.log(`id`,req.params.id) &
  sql = mysql.format(sql, [req.body.first_name, req.body.last_name, req.params.id]) &

  pool.query(sql, (err, results) => { &
    if (err) return handleSQLError(res, err) &
    return res.status(204).json(); &
  }) & 
} & 

const deleteUserByFirstName = (req, res) => { &
  // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME> &
  let sql = "DELETE FROM users WHERE first_name = ? " &
  // WHAT GOES IN THE BRACKETS &
  // console.log(req.params.first_name) &
  sql = mysql.format(sql, [req.params.first_name])  &

  pool.query(sql, (err, results) => { &
    if (err) return handleSQLError(res, err)  &
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` }); &
  }) &
} &

module.exports = { &
  getAllUsers, &
  getUserById, &
  createUser, &
  updateUserById, &
  deleteUserByFirstName &
} &
        '
        options={{
        mode: 'javascript',
        theme: 'material',
        lineNumbers: true,
        lineSeparator: '&'
    }}
      />
          <Typography className="general">View with on <a href='https://github.com/listenToRipley/311_wk4_day2_node_mysql/blob/master/controllers/users.js'>Github</a></Typography>
    </div>
  )
}

export default SampleController