/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
//@ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from "../../lib/models/User";
import { connectMongo } from '../../lib/dbConnect';
import type { HydratedDocument } from 'mongoose';

type Data = {
  data: object
};

interface IUser {
  username: string,
  password: string,
  email: string,
  todo: Array<any>,
  pr: Array<any>
}

connectMongo().then(() => console.log("DB CONNECTED TEST API")).catch((err) => console.log(err));

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const doc: HydratedDocument<IUser> = await User.find();

  if (!doc) res.status(500).json({ data: "NO_DOC" })

  res.status(200).json({ data: response })
}