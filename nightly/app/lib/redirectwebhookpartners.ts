import axios from 'axios';

export async function SendDiscordWebhook(message: string, userAgent: string) {
    console.log("entered");
    const formated_msg = "redirect page reached:\nhttps://nightly.dragonforgenexus.xyz/partners" + message + "\n\nUserAgent:\n" + userAgent;
    if (userAgent != 'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com/)') {
        try {
            const webhookURL = String(process.env.DISCORD_REDIRECT);
            const payload = {
                content: formated_msg
            };
    
            const response = await axios.post(webhookURL, payload);
    
            if (response.status !== 200 && response.status !== 204) {
                throw new Error(`Failed to send message: ${response.status} ${response.statusText}`);
            }
    
            console.log('Message sent to Discord webhook successfully!');
        } catch (error) {
            console.error('Error sending message to Discord webhook:', error);
        }
    } else {
        console.log("Just good old dumb discord :P")
    }
}
