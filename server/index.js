const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 3006;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
|             | Microservice    |          |
| Port        | Description     | Author   |
| ----------- | --------------- | -------- |
| 3000        | Overview        | Stephen  |
| 3001        | Gallery         | Bryan    |
| 3002        | Reviews         | Therese  |
| 3003        | AboutGame       | Josh     |
| 3004        | TopReviews      | Josh     |
| 3005        | RecentUpdat     | Josh     |
| 3006        | Proxy           | N/A      |
*/


//Port 3000
//GET for Stephen's microservice 
app.get('/proxy', (req, res) => {
  request('http://localhost:3000/api/overview', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})

//Port 3001
//GET for Bryan's microservice: Gallery
app.get('/proxy', (req, res) => {
  request('http://localhost:3001/api/image', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})

//Port 3002
//GET for Therese's microservice: Reviews
app.get('/proxy', (req, res) => {
  request('http://localhost:3002/api/reviews', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})

//Port 3003
//GET for Josh's microservice: AboutGame, endpoint /api/features
app.get('/proxy', (req, res) => {
  request('http://localhost:3003/api/features', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})

//Port 3004
//GET for Josh's microservice: topReviews, endpoint /api/topReviews
app.get('/proxy', (req, res) => {
  request('http://localhost:3004/api/topReviews', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})

//Port 3005
//GET for Josh's microservice: recentUpdates, endpoint /api/features
app.get('/proxy', (req, res) => {
  request('http://localhost:3005/api/recentUpdates', (err, response, body)=>{
    // response.end();
    // console.log('body', body);
    res.send(body);
  })
})





app.listen(port, () => {
  console.log(`Proxy Server is listening on ${port}`);
});