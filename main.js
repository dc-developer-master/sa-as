const { JsonDatabase } = require(`wio.db`)
const db = new JsonDatabase();
client.on('message', message=>{
        if(message.content.toLowerCase()==="sa"){
            if(db.has("saas"+message.guild.id)){
                message.channel.send('as')
            }
        }
    });
