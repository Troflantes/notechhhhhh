module.exports = async function (channel, message, options) {

    function sendHook(hook, message, options) {

      
        if (typeof message !== 'string' && ['RichEmbed', 'MessageEmbed'].includes(message.constructor.name)) {
            options.embeds = [message];
            message = null;
        }

        let callback = hook.send(message, {
            username: options.name,
            avatarURL: options.icon,
            embeds: options.embeds
        })

    }

    async function fallback(channel, message, timer) {

      
        channel = channel.channel || channel;

      
        let callback = await channel.send(message)

        
        if (timer) callback.delete({
            timeout: timer
        })

    }

  
    if (!channel) return console.log('HOOK: Please read the NPM page for documentation.')

  
    channel = channel.channel || channel;

  
    if (!channel.send || !channel.fetchWebhooks) return console.log('HOOK: Invalid Channel.');
    if (!message) return console.log('HOOK: Invalid Message.');

  
    if (!options) options = {};
    options = {
        delete: options.delete || false,
        color: options.color || null,
        name: options.name || 'Message',
        icon: options.icon || undefined
    }
    if (isNaN(options.delete)) options.delete = false;

  
    let sended = false;
    let webhooks = await channel.fetchWebhooks().catch(err => {
        sended = true;
        fallback(channel, message, options.delete)
    });
    if(sended) return;

  
    let hook = webhooks.find('name', 'eg\'s')
    if (!hook) {
        try {
            hook = await channel.createWebhook('eg\'s', {
                avatar: 'https://i.imgur.com/7T5GCeZ.png'
            });
        } catch (e) {
            hook = await channel.createWebhook('eg\'s', 'https://i.imgur.com/7T5GCeZ.png');
        }
        return sendHook(hook, message, options);
    }
    sendHook(hook, message, options);

}
