const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected to db ',config.database);
});

mongoose.connection.on('error', (err)=>{
    console.log('error connecting to db ',err);
});


const images = require('./routes/images');
const port = process.env.PORT || 8080;
console.log("listening to port: "+port);


const router = express();
//CORS - For communication between domains
router.use(cors());
// Set static folder
router.use(express.static(path.join(__dirname,'public')));
router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router.use('/images', images);

router.get('/', (req, res) => {
    res.json({msg:'hello invalid'})
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

router.listen(port, () => {
    console.log('Server listening to port', port);
});
