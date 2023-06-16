const db = require("../../server-utilities/db");
const fs = require("fs");
const path = require("path");

async function handler(req, res) {
  let data = fs.readFileSync(
    path.join(process.cwd(), "server-utilities/mock-data/posts.json"),
    "utf-8"
  );
  data = JSON.parse(data);
  if (req.method === "POST") {
    let client;
    try {
      client = db.getClient();
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
    try {
      await db.insertRecords(client, "posts", data);
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }
  }
  res.status(200).json({ posts: JSON.stringify(data) });
}

export default handler;
