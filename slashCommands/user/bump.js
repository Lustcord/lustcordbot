const { ApplicationCommandType } = require("discord.js");

module.exports = {
    name: 'bump',
    description: 'Bump the server in the Lustcord serverlist.',
    cooldown: 3000,
    type: ApplicationCommandType.ChatInput,
    scope: 'dev',

    run: async (client, interaction) => {
        const { member, channelId, guildId, applicationId, 
            commandName, deferred, replied, ephemeral, 
            options, id, createdTimestamp 
        } = interaction; 
        const { guild } = member;



    }
}