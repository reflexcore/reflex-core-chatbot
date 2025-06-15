import { NextApiRequest, NextApiResponse } from 'next';
import { generateReflexResponse } from '../../lib/reflex-core';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { message, metadata } = req.body;
  const response = generateReflexResponse(message, metadata);
  res.status(200).json({ response });
}