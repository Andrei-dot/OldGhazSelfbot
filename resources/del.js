bot.on('message', async message => {
            if (message.content ==  "_clear") { message.channel.fetchMessages().then((message) => message.forEach(m => m.delete())); }
});