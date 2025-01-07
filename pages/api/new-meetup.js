import { MongoClient } from "mongodb";

export default async function handler(req, res){
  if (req.method === "POST") {
    const data = req.body;

    try {
      console.log("Connecting to database...");
      const client = await MongoClient.connect(
        "mongodb+srv://Vadim:aKFxcp9rOyRJJMF9@cluster0.38dqe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
      );

      console.log("Connected successfully!");

      const db = client.db("meetups");
      const meetupsCollection = db.collection("meetups");

      console.log("Inserting data:", data);
      const result = await meetupsCollection.insertOne(data);

      console.log("Insert result:", result);

      client.close();
      console.log("Database connection closed.");

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

// aKFxcp9rOyRJJMF9;
