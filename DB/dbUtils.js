import { MongoClient } from "mongodb";

export async function getDb() {
  const client = new MongoClient(process.env.DB_CONNECTION_STRING);
  const connection = await client.connect();
  const db = connection.db("eCommerce");
  return db;
}
