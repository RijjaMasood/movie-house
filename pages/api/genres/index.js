import { getGenres } from "@/src/helper/mongodb/dbService";

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const genres = await getGenres();
        res.status(200).json(genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }