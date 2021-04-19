import { useState, useEffect } from "react";
import Head from "next/head";
import { JumboTitle, NavBar } from "./components/organisms";

type iNinja = {};

export default function Home(): JSX.Element {
  const [ninjas, setNinjas] = useState<iNinja[] | null>(null);
  const [networkErr, setNetworkErrt] = useState<null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`/api/team_scrap`).then((r) => r.json());
        setNinjas(ninjas);
        console.log({ data });
      } catch (err) {}

    };
    if (ninjas === null) {
      getData()
    }
  }, []);
  return (
    <div className="">
      <Head>
        <title>Tretton37</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2">
        <NavBar />
        <JumboTitle title="_meet our colleagues" />
      </main>

      <footer className=""></footer>
    </div>
  );
}
