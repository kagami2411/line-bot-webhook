import { Client } from "@line/bot-sdk";

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
};

const client = new Client(config);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const events = req.body.events;

    for (const event of events) {
      if (event.type === "message") {
        await client.replyMessage(event.replyToken, {
          type: "text",
          text: "こんにちは！Bot稼働中です！🤖✨"
        });
      }
    }

    return res.status(200).send("OK");
  } else {
    return res.status(405).send("Method Not Allowed");
  }
}
