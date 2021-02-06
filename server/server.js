const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(public));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})
app.listen(port);