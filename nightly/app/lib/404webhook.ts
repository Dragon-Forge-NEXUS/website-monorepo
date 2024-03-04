import axios from 'axios';

export async function SendDiscordWebhook(message: string, userAgent: string) {
    console.log("entered");
    const formated_msg = "404 page reached:\nhttps://nightly.dragonforgenexus.xyz/" + message + "\n\nUserAgent:\n" + userAgent;
    try {
        const webhookURL = String(process.env.DISCORD_404);
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
}
