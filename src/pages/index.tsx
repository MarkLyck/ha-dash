import { type NextPage } from 'next'
import Head from 'next/head'

import { entities } from '@/lib/websocket'

const Home: NextPage = () => {
  console.log('entities', entities.value)
  return (
    <>
      <Head>
        <title>Home Dashboard</title>
        <meta name="description" content="Home Assistant Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-slate-1000">test</main>
    </>
  )
}

export default Home
