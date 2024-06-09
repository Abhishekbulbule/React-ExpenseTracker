const express = require('express');
require('dotenv').config();

const routes = require('./Routes/actionRoutes')

const app = express();
app.use(express.json());
app.use('/api', routes);

app.listen(3000,()=>{
    console.log(`Server Started at localhost:${3000}`)
});






