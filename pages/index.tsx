import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navbar";

export default function Home() {
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
  );
}
