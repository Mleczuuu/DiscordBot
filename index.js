const { Client } = require("discord.js");
const Discord = require("discord.js");
const { config } = require("dotenv");
const prefix = "!";
var statusActivity = "WATCHING"
var statusGame = "Mleczu#1337"

// Declares our bot,
// the disableEveryone prevents the client to ping @everyone
const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
})

// When the bot's online, what's in these brackets will be executed
client.once("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    // Set the user presence
    client.user.setActivity(statusGame, { type: statusActivity });
});

client.on("message", async message => {
    // If the author's a bot, return
    // If the message was not sent in a server, return
    // If the message doesn't start with the prefix, return
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // Arguments and command variable
    // cmd is the first word in the message, aka the command
    // args is an array of words after the command
    // !say hello I am a bot
    // cmd == say (because the prefix is sliced off)
    // args == ["hello", "I", "am", "a", "bot"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {

        message.channel.send(`🏓 Pong!`);
    }

    if (cmd === "status") {
        if (!message.member.roles.cache.some((role) => role.name === 'eeeeluwina')) return message.channel.send('No permissions!');
        if(args.length < 2) return message.channel.send('!status (Activity) (Game)');
        if (args[0] !== "PLAYING" && args[0] !== "WATCHING" && args[0] !== "LISTENING") return message.channel.send('Poprawny activity - PLAYING / WATCHING / LISTENING');
            var statusActivity = args[0];
            var statusGame = args[1];
            client.user.setActivity(statusGame, { type: statusActivity });
            const embed = new Discord.MessageEmbed()
            .setTitle('Ustawiono status.')
            .setDescription('Zmieniono status bota. \n \n Nowy status: ')
            .addFields(
            { name: 'Activity:', value: `${statusActivity}` },
            { name: 'Game:', value: `${statusGame}` },
            )
            .setTimestamp()
            .setColor('#00ff11');
            message.channel.send(embed);
    }

});



client.on('voiceStateUpdate', (oldMember, newMember) => {
    const newUserChannel = newMember.channelID
    const newChannel = newMember.channel
    const oldUserChannel = oldMember.channelID
    const oldChannel = oldMember.channel
    const user = newMember.member.id
    const queue10 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 10")
    const queue9 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 9")
    const queue8 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 8")
    const queue7 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 7")
    const queue6 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 6")
    const queue5 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 5")
    const queue4 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 4")
    const queue3 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 3")
    const queue2 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 2")
    const queue1 = newMember.guild.roles.cache.find(r => r.name === "Kolejka 1")
    if (oldUserChannel === '768392519317848085' && newUserChannel !== '768392519317848085') {
        if (oldChannel.members.size < 10) {
            console.log(`${user} (${newMember.member.displayName}) opuścił kanał MAX 10`)
            if (newMember.member.roles.cache.some(role => role.name === 'Kolejka 1')) {
                //const queueUser = queue1.members.map(m=>m).join('\n')
                //const queueUser = queue1.members
                queue1.members.map(m=>m).join('\n').member.setVoiceChannel(`oldMember.channelID`)
                console.log(`Przeniesiono ${member.displayName} na kanał MAX 10.`)
            }
        }
    }
    if(newUserChannel === '768370174767398912') {
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 1')) {
            newMember.member.roles.add(queue1)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 1`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 2')) {
            newMember.member.roles.add(queue2)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 2`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 3')) {
            newMember.member.roles.add(queue3)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 3`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 4')) {
            newMember.member.roles.add(queue4)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 4`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 5')) {
            newMember.member.roles.add(queue5)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 5`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 6')) {
            newMember.member.roles.add(queue6)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 6`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 7')) {
            newMember.member.roles.add(queue7)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 7`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 8')) {
            newMember.member.roles.add(queue8)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 8`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 9')) {
            newMember.member.roles.add(queue9)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 9`)
            return
        }
        if (!newMember.member.roles.cache.some(role => role.name === 'Kolejka 10')) {
            newMember.member.roles.add(queue10)
            console.log(`${user} (${newMember.member.displayName}) has joined the queue, number 10`)
            return
        }
        client.channels.cache.get("768380969676832768").send(`<@${user}>, kolejka jest pełna, spróbuj ponownie później.`)
    }
      else if (oldUserChannel === '768370174767398912' && newUserChannel !== '768370174767398912') {
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 1')) {
            newMember.member.roles.remove(queue1)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 1`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 2')) {
            newMember.member.roles.remove(queue2)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 2`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 3')) {
            newMember.member.roles.remove(queue3)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 3`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 4')) {
            newMember.member.roles.remove(queue4)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 4`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 5')) {
            newMember.member.roles.remove(queue5)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 5`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 6')) {
            newMember.member.roles.remove(queue6)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 6`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 7')) {
            newMember.member.roles.remove(queue7)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 7`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 8')) {
            newMember.member.roles.remove(queue8)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 8`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 9')) {
            newMember.member.roles.remove(queue9)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 9`)
            return
        }
        if (!newMember.member.roles.cache.has((role) => role.name === 'Kolejka 10')) {
            newMember.member.roles.remove(queue10)
            console.log(`${user} (${newMember.member.displayName}) has left the queue, number 10`)
            return
        }
      }
  })



// Login the bot
client.login(process.env.TOKEN);