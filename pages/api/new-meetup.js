import { MongoClient } from "mongodb";

// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://yuchuanwu:Shin0915@cluster0.ivtm9.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    console.log("ss");
    // collection => table
    // document => entry
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
