const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const shipsJSON = require('./ships.json');
const client = new Discord.Client();

function getShip() {
    const keys = Object.keys(shipsJSON)
    const randIndex = Math.floor(Math.random() * keys.length)
    const ship = keys[randIndex]
    const info = ship[ship]
    return [ship, info];
}

client.once('ready', () => {
    console.log('Ready!');
    const ship = getShip()
    console.log(ship[0] + ship[1]);
})


client.on('message', message => {
    if(message.content.startsWith(`${prefix}ship`)) {
        ship = getShip()
        message.channel.send(ship[0] + ': ' + ship[1])
    }
})

client.login(token);