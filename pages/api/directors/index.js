import { getDirectors } from "@/src/helper/utility";

export default function handler(req, res) {
    const directors = getDirectors()
    res.status(200).json({ directors: JSON.stringify(directors) });
}
  