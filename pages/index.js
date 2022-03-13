import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
      {/* header */}

      <Header />

      {/* Feed */}

      <Feed />

      {/* Modal */}
    </div>
  )
}
