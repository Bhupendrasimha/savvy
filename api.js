

const express = require('express');
const cors = require('cors');
const requestAPI = require('./uitl.js');


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  console.log(req.query);
  const q = req.query.query;
  if (q) {
   let response=await requestAPI(q)
      console.log(response,"data")
      res.json(response)
  }else{
    res.json(data)
  }
 
});

app.listen('4000',() => {
  console.log("server starting on port : " + 4000);
});
// module.exports.handler=serverless(app)
