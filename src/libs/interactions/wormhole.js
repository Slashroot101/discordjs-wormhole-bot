const { SlashCommandBuilder, ChannelType } = require("discord.js");


module.exports = {
  data: new SlashCommandBuilder()
                            .setName('wormhole')
                            .setDescription('Creates a wormhole with a different server')
                            .addStringOption(x => x.setName('msg').setDescription('The message to send').setRequired(true)),
  async execute(interaction, user) {
    const message = interaction.options.get('msg').value;
    const guild = interaction.client.guilds.cache.random();
    const channel = guild.channels.cache.filter(x => x.type === ChannelType.GuildText).random(1)[0];
    await channel.send({content: `A message from a wormhole appeared: ${message}`});

    await interaction.reply('Your message has been sent through the wormhole');
  }
}