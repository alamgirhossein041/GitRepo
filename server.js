const express = require('express');
const { info } = require('console');
const app = express();
const port = 5000;

app.use(express.static('/public'));

var BotController = require('./bot_control.js');
var BotInfo = BotController.BotGroups;

app.get('/', (req, res) => 
{
    res.status(200).json({ info: BotInfo[0]._botGroupName });
})

app.listen(port, () => console.log("Server has started"));