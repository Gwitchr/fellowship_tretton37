import Head from 'next/head'
import {JumboTitle} from './components/organisms'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Tretton37</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <JumboTitle title="Meet the team"/>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
