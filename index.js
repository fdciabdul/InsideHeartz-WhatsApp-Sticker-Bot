const {
  create,
  Client,
  decryptMedia
} = require("@open-wa/wa-automate");

async function start(client) {
  client.onMessage(async (msg) => {
    // console.log(msg);
    if (msg.bo@dy === "!cek") {
      client.sendText(msg.from, "👋 Hello! Inside Heartz In Here");
      client;
    } else if (msg.mimetype) {
      if (msg.caption === "!stiker" && msg.type === "image") {
        const mediaData = await decryptMedia(msg);
        const imageBase64 = `data:${msg.mimetype};base64,${mediaData.toString(
          "base64"
        )}`;
        await client.sendImageAsSticker(msg.from, imageBase64);
      }
    }
  });
}
