import { serverPusher } from './../../pusher';
import { Message } from './../../typing.d';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
type Data = {
  message: Message;
};
type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'POST') {
    res.status(404).json({ body: 'Method Not Allowed' });
  }
  const { message } = req.body;
  //replace the timestamp of the user to the timestamp of the server
  const newMessage = { ...message, created_at: Date.now() };
  //push to upstash redis db;
  await redis.hset('messages', message.id, newMessage);

  serverPusher.trigger('messages', 'new-message', newMessage);

  res.status(200).json({ message: newMessage });
}
