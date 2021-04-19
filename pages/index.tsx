import { useState, useEffect } from "react";
import Head from "next/head";
import {
  JumboTitle,
  NavBar,
  UsersRoster,
  SearchBar,
} from "./components/organisms";
import { iNinja } from "../types";

export default function Home(): JSX.Element {
  const [ninjas, setNinjas] = useState<iNinja[] | null>(null);
  const [networkErr, setNetworkErr] = useState<null>(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`/api/team`).then((r) => r.json());
        // const data = await fetch(`/api/team_scrap`).then((r) => r.json());
        // Changed to team instead of team_scrap, cause the API has more info, like gh site
        setNinjas(data.ninjas);
      } catch (err) {
        setNetworkErr(err.toString());
      }
    };
    if (ninjas === null) {
      getData();
    }
  }, []);

  console.log({ninjas})

  return (
    <div className="">
      <Head>
        <title>Tretton37</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2">
        <NavBar below={false} />
        <JumboTitle
          title="_meet our colleagues"
          subtitle="a family of handpicked specialists"
        />
        {!networkErr && ninjas ? (
          <>
            {/* <SearchBar /> */}
            <UsersRoster ninjas={ninjas} />
          </>
        ) : null}
      </main>

      <footer className=""></footer>
    </div>
  );
}
