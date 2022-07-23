import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mikalan Ballentine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mikalan Ballentine" />
        <p className="description">
          IS this working? <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
