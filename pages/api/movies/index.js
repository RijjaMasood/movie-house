import { getMovies } from "@/src/helper/mongodb/dbService";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
