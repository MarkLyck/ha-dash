import { useEffect } from 'react'
import { type NextPage } from 'next'
import Head from 'next/head'

import { connectToHASS, haEntities, haServices, haUser } from '@/lib/websocket'

const Home: NextPage = () => {
  console.log('entities', haEntities.value)
  console.log('haServices', haServices.value)
  console.log('haUser', haUser.value)
  const user = haUser.value

  useEffect(() => {
    connectToHASS()
  }, [])

  return (
    <>
      <Head>
        <title>Home Dashboard</title>
        <meta name="description" content="Home Assistant Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-slate-1000">{user?.name} test</main>
    </>
  )
}

export default Home
