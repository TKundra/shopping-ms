const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', proxy('http://localhost:8001'))
app.use('/order', proxy('http://localhost:8003'))
app.use('/product', proxy('http://localhost:8002'))

app.listen(3000, () => {
    console.log('Gateway is Listening to Port 3000')
})