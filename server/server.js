const express =require( 'express');
const http =require( 'http');
const path =require( 'path');
const api =require( './api');

const PORT = process.env.PORT || 3000;

const app = express()


app.use('/api/:version', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  req.version=req.params.version
  next() 
},api);


const server = http.createServer(app);
server.listen(PORT);
console.log(`Server started at http://localhost:${PORT}`);