import data from "../../../server-utilities/mock-data/posts";

// const data = require("../../../server-utilities/mock-data/posts").data;

function handler(req, res) {
  res.status(200).json({ posts: JSON.stringify(data) });
}

export default handler;
