const express = require('express');
const bodyParser = require('body-parser');
const port = 3006;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));






app.listen(port, () => {
  console.log(`Proxy Server is listening on ${port}`);
});