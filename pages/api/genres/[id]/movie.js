import { getMoviesByGenre } from "@/src/helper/mongodb/dbService";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    console.log("Genre ID:", id);

    try {
      const movies = await getMoviesByGenre(id);

      if (!movies || movies.length === 0) {
        return res.status(404).json({ message: 'No movies found for this genre' });
      }

      res.status(200).json(movies);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
