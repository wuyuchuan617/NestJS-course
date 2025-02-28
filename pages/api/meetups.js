import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const meetups = await meetupsCollection.find().toArray();

      client.close();
      res.status(200).json(meetups.reverse());
    } catch (error) {
      res.status(500).json({ message: "Database connection failed!" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
