const { emojis } = require("../../../../config");
module.exports = {
  description: (message, guildData) => `
**1)** Prevent sending discord links\n${
    guildData.enableddiscordlinks
      ? `${emojis.enabled} Enabled\nSince <t:${Math.round(
          guildData.since / 1000
        )}:F>`
      : `${emojis.disabled} Disabled`
  }

**2)** Prevent sending https links\n${
    guildData.enabledlinks
      ? `${emojis.enabled} Enabled\nSince <t:${Math.round(
          guildData.since / 1000
        )}:F>`
      : `${emojis.disabled} Disabled`
  }
        
**3)** Ignore channels for discord links `,

  listDescription: () =>
    `**1)** Add a channel to ignore\n**2)** Remove a channel to ignore\n**3)** List of ignored channels`,

  title: (count) => `Ignored channels - (${count})`,

  noFoundChannel: () => `This channel can't be found!`,

  addChannelQuestion: () => `Please mention which channel to ignore!`,
  channelAlreadyExist: () => `This channel is already in ignored channels`,
  successAdd: (salon) => `${salon} has been added to ignored channels!`,

  removeChannelQuestion: () => `Please mention the channel to be removed!`,
  channelAlreadyNoExist: () => `This channel is not in the ignored channels`,
  successRemove: (salon) => `${salon} has been removed from ignored channels!`,
};
