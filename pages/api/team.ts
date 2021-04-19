import fetch from "node-fetch";
import type { NextApiRequest, NextApiResponse } from "next";

const teamURL = "https://api.1337co.de/v3/employees";

type Data = {
  name: string;
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Data | any>
) => {
  try {
    const data = await fetch(teamURL, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api-key ${process.env.API_KEY}`,
      },
    }).then((t: any) => t.json());

    const cleanData = data.map((el) => {
      const text = el?.mainText
        ?.replace("<p>", " ")
        .replace("</p> ", " ")
        .split("</p><p>");
      return { ...el, mainText: text };
    });

    res.status(200).json({ ninjas: cleanData });
  } catch (error) {
    console.warn({ error });
    res.status(500).json({
      error,
    });
  }
};
