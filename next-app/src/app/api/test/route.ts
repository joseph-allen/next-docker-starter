import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = process.env.MONGODB_URI as string;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const db = client.db('mydatabase');
    const collection = db.collection('test');

    // Try to find a document
    let result = await collection.findOne({});

    // If no document exists, insert one
    if (!result) {
      const insertResult = await collection.insertOne({
        message: 'Hello World',
      });
      result = await collection.findOne({ _id: insertResult.insertedId });
    }

    return NextResponse.json({ data: result });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
