import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  description: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const level = req.query.level;

  res.status(200).json({
    id: Number(level),
    name: `Level ${level}`,
    description: `This is the description for level ${level}`,
  });
}
