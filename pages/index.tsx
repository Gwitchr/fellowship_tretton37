import { useState, useEffect, ChangeEvent, SubmitEvent } from "react";
import Head from "next/head";
import {
  JumboTitle,
  NavBar,
  UsersRoster,
  SearchBar,
} from "../components/organisms";
import { iNinja } from "../types";
import { useDebounce } from "../hooks";

export default function Home(): JSX.Element {
  const [ninjas, setNinjas] = useState<iNinja[] | null>(null);
  const [networkErr, setNetworkErr] = useState<null>(null);
  const [sortByName, setSortByName] = useState(false);
  const [sortByOffice, setSortByOffice] = useState(false);
  const [search, setSearch] = useState("");
  const searchDebounce: string = useDebounce(search, 500);
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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
  const handleSortByName = (e:ChangeEvent<HTMLInputElement>) => {
    setSortByName(e.target.checked);
  };
  const handleSortByOffice = (e:ChangeEvent<HTMLInputElement>) => {
    setSortByOffice(e.target.checked);
  };

  const sortFunction = (a: any, b: any): number => {
    if (sortByName) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    }
    return 0
  };

  const sortByOfficeFunction=(a:any,b:any):number=>{
    if(sortByOffice){
      const nameA = a?.office?.toUpperCase();
      const nameB = b?.office?.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    }
    return 0

  }

  const filteredNinjas = (el: iNinja) => {
    if (searchDebounce !== "") {
      return Object.entries(el).some(([_key, val]) =>
        val
          ? val
              .toString()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .indexOf(search.toLowerCase()) !== -1
          : false
      );
    }
    return true;
  };

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
            <SearchBar
              handleSubmit={handleSubmit}
              handleSearch={handleSearch}
              handleSortByName={handleSortByName}
              sortByName={sortByName}
              handleSortByOffice={handleSortByOffice}
              sortByOffice={sortByOffice}
              search={search}
            />
            <UsersRoster
              {/* This is probably not the best to sort data, it should be done by the API */}
              ninjas={ninjas.filter(filteredNinjas).sort(sortFunction).sort(sortByOfficeFunction)}
            />
          </>
        ) : null}
      </main>

      <footer className=""></footer>
    </div>
  );
}
