import Head from 'next/head'
import Navbar from '../components/navbar'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <div className="container">
      <Head>
        <title>Artiyan Prasetya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="content">
        <h1 className="title">Are you ready to rock 2021?</h1>
      </div>
    </div>
  )
}
