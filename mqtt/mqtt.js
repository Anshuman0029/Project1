const mqtt = require('mqtt');
const randomCoordinates = require('random-coordinates');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anshuman:9351919275@cluster0.kbo3ozz.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const bodyParser = require('body-parser');
const Device = require('./models/device');
const app = express();
app.use(express.static('public'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

client.on('connect', () => {
    client.subscribe('/room1'); 
    console.log('mqtt connected');
});

client.on('message', (topic, message) => {
  if (topic == '/room1') {
    const data = JSON.parse(message);
    console.log(data);
    var myquery = {"room": data.room};
    var newvalues = { $set: {room: data.room, status: data.status } };
    console.log(myquery);
    console.log(newvalues);
    console.log()
    Device.updateOne(myquery,newvalues, (err) => {
      if (err) {
        console.log(err)
      }
      console.log("1 document updated");
      //const light = new Device({
        //room:data.room,
        //status: data.status       
      });
    
}})



app.listen(port, () => { 
    console.log(`listening on port ${port}`);
});