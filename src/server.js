const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

const products = require('./routes/products');

app.use(cors());

app.use(express.static('public'));

app.use('/products' , products);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
