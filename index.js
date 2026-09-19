const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`ProsiBot aktif! Giriş yapılan bot: ${client.user.tag}`);
});

// Botun çalışması için buraya kendi token'ını yazacaksın (veya Railway Environment Variables kısmına ekleyeceksin)
client.login('BURAYA_TOKENI_YAZ');
