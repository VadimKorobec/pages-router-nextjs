import { MongoClient } from "mangodb";

export const handler = async(req, res) => {
  if (req.method === "POST") {
    const data = req.body;

      const { title, image, address, description } = data;
      
     const client = await MongoClient.connect(
        "mongodb+srv://Vadim:aKFxcp9rOyRJJMF9@cluster0.38dqe.mongodb.net/"
      );

      const db = client.db;

      const meetupsCollection = 
  }
};

// aKFxcp9rOyRJJMF9;
