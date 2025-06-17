import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../lib/firebase-admin'; //

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const test = await db.collection('test').get();
    res.status(200).json({ success: true, size: test.size });
  } catch (error) {
    res.status(500).json({ error: 'Firebase error', details: (error as Error).message });
  }
}
