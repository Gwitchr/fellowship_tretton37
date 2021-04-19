import Head from 'next/head'
import {JumboTitle,NavBar} from './components/organisms'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tretton37</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2">
        <NavBar/>
        <JumboTitle title="_meet our colleagues"/>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
