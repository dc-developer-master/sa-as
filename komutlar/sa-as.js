exports.run = async(client, message, args) => {
      if(!message.guild)return;
        if(!message.member.hasPermission(`ADMINISTARTOR`))return message.channel.send(`Bu komutu kullanabilmek iç **Yönetici** yetkisine sahip olmalısınız`);
        if(!args[0])return message.channel.send(`Bu komutun kullanımı **!sa-as <aç/kapat>**`);
        if(args[0]==="aç"){
            if(db.has('saas'+message.guild.id))return message.channel.send('Bu özellik zaten açık.');
            db.set('saas'+message.guild.id, "açık").then(()=>{
                message.channel.send('Bu özellik başırıyla açılmıştır.')
            });
        }else if(args[0]==="kapat"){
            if(!db.has('saas'+message.guild.id))return message.channel.send('Bu özellik zaten kapalı.');
            db.delete('saas'+message.guild.id).then(()=>{
                message.channel.send('Bu özellik başarı ile kapatılmıştır.')
            });
        }else{
            return message.channel.send(`Bu komutun kullanımı **!sa-as <aç/kapat>**`);
};

exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'sa-as',
description: '',
usage: ''
};
