import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../../utils/models/User";
import { connectMongo } from '../../../../utils/dbConnect';
import bcrypt from "bcryptjs";

connectMongo().then(() => console.log("DB CONNECTED")).catch((err) => {
  throw new Error("DB COULD NOT ESTABLISH CONNECTION\n" + err);
});

export interface PR {
  squat: Number,
  bench: Number,
  deadlift: Number
};

export interface UserModel {
  username: string,
  password: string | void,
  email: string,
  todo: Array<string>,
  pr: PR
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const username: string = req.body.username;
  const password: string = req.body.password;
  const email: string = req.body.email;
  const todo = [];
  const pr: PR = {
    squat: 0,
    bench: 0,
    deadlift: 0
  };

  if (!username || !password || !email) {
    res.status(401).end("Username or password or email is missing");
    return null;
  };

  const hashedPassword: string = await bcrypt.hash(password, 10);

  const user = new User({
    username: username,
    password: hashedPassword,
    email: email,
    todo: todo,
    pr: pr
  });

  User.create(user);

  res.status(201).json({ msg: "CREATED_USER", user: user });
}