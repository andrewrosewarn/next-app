import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
}[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json([
    {
      id: 1,
      name: "Level 1",
    },
    {
      id: 2,
      name: "Level 2",
    },
    {
      id: 3,
      name: "Level 3",
    },
    {
      id: 4,
      name: "Level 4",
    },
    {
      id: 5,
      name: "Level 5",
    },
  ]);
}
