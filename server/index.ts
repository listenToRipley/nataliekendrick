import * as express from "express";
import * as path from "path"; 
import * as cors from "cors"; 

const app = express(); 

app.use(express.static(path.join(__dirname, ".", "dist")))

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"))
});

const port = process.env.PORT || 8000; 

app.listen(port, () => {
  console.log('listening on port :', port)
})