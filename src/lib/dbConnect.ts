import mongoose from "mongoose";
import { env } from "../env/server.mjs";

// we don't need to check if mongo_uri exists because it is already validated in src/env/schema.env
const MONGO_URI = env.MONGO_URI;

export const connectMongo = () => mongoose.connect(MONGO_URI);