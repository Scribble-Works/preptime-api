require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const api = require('./routes/api');
const download = require('./routes/download');

// const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

app.use(express.json())
app.use(cors())

// console.log(process.cwd())

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, () => {
    console.log('connected to mongodb')

    app.use('/api', api)
    app.use('/download', download)
    
    // Test resquest/response to make sure server is running.
    app.get('/', (req, res) => {
        res.status(200).json({
            success: true,
            message: 'server ready to serve data...',
            variables: process.env
        })
    })
    
    app.listen(PORT, () => {
        console.log(`Server running on port:${PORT}`)
    })
})
