const mongoose = require("mongoose");
const { data } = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to DB");

    await Listing.deleteMany({});

    console.log("data was initialized");
      await Listing.insertMany(data);
    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

main();
