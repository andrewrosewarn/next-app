import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  name: string;
  description: string;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const level = req.query.level;

  await sleep(1000);

  res.status(200).json({
    id: Number(level),
    name: `Level ${level}`,
    description: `This is the description for level ${level}`,
  });
}
