import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Navbar from '../components/Navbar'
import SurveyContent from '../components/SurveyContent'
import Footer from '../components/Footer'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"

export default function FullSurvey({ movies }) {
  return (
    <div>
      <Head>
        <title>Full Survey | Union Shield</title>
        <link rel="icon" href="smalllogo.png" />
      </Head>

      <Navbar />
      <SurveyContent type="fairCompensation" />
     
      <div className="flex flex-wrap">
            {movies && movies.map(movie => (
                <div>
                <h2>{movie.title}</h2>
                </div>
            ))}
      </div>
      <Footer />

      <style jsx>{`

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps(context) {
  const client = await clientPromise
  const db = client.db("sample_mflix");

  const data = await db.collection("movies").find({}).limit(20).toArray()

  const movies = JSON.parse(JSON.stringify(data));
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: { movies },
  }
}

