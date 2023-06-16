import { MongoClient } from "mongodb";

export function getClient() {
  try {
    const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_NAME}.kb13l9b.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(connectionString);
    return client;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function insertRecords(client, collection, records) {
  try {
    await client.db().collection(collection).insertMany(records);
  } catch (error) {
    throw new Error(error.message);
  }
}
