//  ----- OLD IMPLEMENTATION FOR PREVIOUS ASSIGNMENT VERSION

import { getDirectors } from "@/src/helper/mongodb/dbService";

// export default function handler(req, res) {
//     const directors = getDirectors()
//     res.status(200).json({ directors: JSON.stringify(directors) });
// }
  

export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const directors = await getDirectors();
        res.status(200).json(directors);
      } catch (error) {
        console.error('Error fetching directors:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    } else {
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }