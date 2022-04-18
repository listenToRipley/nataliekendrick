const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

console.log('dir?', __dirname)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

//need to add 404 route
console.log(`PROVIDE PORT ${port}`)
app.listen(port);
