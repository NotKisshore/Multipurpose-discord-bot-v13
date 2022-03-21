const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    .setURL("http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=milrato")
		    .setDescription(`
Third Sponsor of This Bot is:
**BERO-HOST** THE BEST HOSTER
<:right:955324360477007902> Heroku Best Hosting,
<:right:955324360477007902> Thanks to them, we are able to host our Website, Bots and GAME SERVERS
<:right:955324360477007902> Our suggestion is, if you want to host Bots / Games / Websites

**What they are offering:**
<:right:955324360477007902> **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
<:right:955324360477007902> **>>** Cheap and fast Domains
<:right:955324360477007902> **>>** WEBHOSTING
<:right:955324360477007902> **>>** TEAMSPEAK SERVERS
<:right:955324360477007902> **>>** Linux & Windows Root Servers

`)
		    .setImage("https://cdn.discordapp.com/icons/948472673216901120/8d98a873a4651c9983c6d221f6252957.webp")
		    .setFooter("NotKisshore",  "https://cdn.discordapp.com/icons/948472673216901120/8d98a873a4651c9983c6d221f6252957.webp")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			.setFooter("Code  'x10' == -5%",  'https://cdn.discordapp.com/icons/948472673216901120/8d98a873a4651c9983c6d221f6252957.webp')
			.setImage("https://cdn.discordapp.com/icons/948472673216901120/8d98a873a4651c9983c6d221f6252957.webp")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			.setURL("https://discord.gg/ByrUwS7rKp")
			.setDescription(`
<:right:955324360477007902> Bittmax is providing us, like Heroku with free Discord Bot-Hosting technologies`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).grey.bgRed)
		return message.reply({embeds: [new MessageEmbed()
		  .setColor(es.wrongcolor)
		  .setFooter(client.getFooter(es))
		  .setTitle(client.la[ls].common.erroroccur)
		  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
		]});
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
