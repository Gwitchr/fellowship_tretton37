import fetch from "node-fetch";
import cheerio, { Cheerio } from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

const teamURL = "https://tretton37.com/meet";

type iNinja = {
  name?: string;
  location?: string;
  picture?: {
    [name:string]:string
  };
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  try {
    const data: Cheerio = await fetch(teamURL).then((t: any) => t.text());
    let ninjas: iNinja[] = [];
    cheerio(".ninja-summary", data).each((_idx, el) => {
      const foundLoc = cheerio(el).find("span")[0];
      const foundName = cheerio(el).find("a")[0];
      const foundPicture = cheerio(el).find("img.portrait")[0];

      const location = cheerio(foundLoc).text() || "";
      let ninja: iNinja = {
        ...(foundName && {
          name: cheerio(foundName).text().replace(location, ""),
        }),
        ...(foundLoc && { location }),
        ...(foundPicture && { picture: foundPicture.attribs }),
      };
      ninjas = [...ninjas, ninja];
    });

    res.status(200).json({ ninjas });
  } catch (error) {
    console.warn({ error });
    res.status(500).json({
      error,
    });
  }
};
