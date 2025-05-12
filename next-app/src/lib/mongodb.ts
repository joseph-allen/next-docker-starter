import { MongoClient } from "mongodb";

declare global {
  let _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

const clientPromise: Promise<MongoClient> = global._mongoClientPromise;

export default clientPromise;
