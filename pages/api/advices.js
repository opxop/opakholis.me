import db from '@/lib/firebase/firebase-admin';

export default async (_, res) => {
  const snapshot = await db.collection('advices').get();
  const advices = [];

  snapshot.forEach((doc) => {
    advices.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ advices });
};
