import { MongoClient } from "mongodb";
import Cors from "cors";

// POST /api/new-meetup

// Initialize CORS
const cors = Cors({
  methods: ["GET", "POST", "OPTIONS"],
  origin: "*", // You can restrict this to specific domains in production
});

const client = new MongoClient("your-mongo-uri");

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors); // Run CORS middleware

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
