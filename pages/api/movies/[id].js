import { getMovieByID } from "@/src/helper/mongodb/dbService";

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const { id } = req.query;
  
      try {
        const movie = await getMovieByID(id);
  
        if (!movie) {
          return res.status(404).json({ message: 'Movie not found' });
        }
  
        res.status(200).json(movie);
      } catch (error) {
        console.error('Error fetching movie:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }