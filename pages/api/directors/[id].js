import { getDirectorByID, getMovies } from "@/src/helper/mongodb/dbService";

export default async function handler(req, res) {
    if (req.method === 'GET') {
      const { id } = req.query;
  
      try {
        const allMovies = await getMovies();
        const movie = allMovies.find(movie => movie.id === id)
        const director = await getDirectorByID(movie.directorId);
        if (!director) {
          return res.status(404).json({ message: 'Director not found' });
        }
        const directedMovies = allMovies.filter(movie => movie.directorId === director.id);

        res.status(200).json({...director, movies: directedMovies});
      } catch (error) {
        console.error('Error fetching director info:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }