import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import EmployerDetails from '../components/EmployerDetails'
import Footer from '../components/Footer'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import { Card, CardBody } from 'shards-react'

export default function Employers({ employers }) {
  
  return (
    <div>
      <Head>
        <title>Union Shield</title>
        <link rel="icon" href="smalllogo.png" />
      </Head>

      <Navbar />
      
      <div className="flex flex-wrap m-5">
            {employers && employers.map(employer => (
              <>
                <EmployerDetails
                name={employer.employerName} total={employer.totalScore}
                acount={employer.reportCounts[0]} ascore={employer.reportBreakdown[0]}
                bcount={employer.reportCounts[1]} bscore={employer.reportBreakdown[1]}
                ccount={employer.reportCounts[2]} cscore={employer.reportBreakdown[2]}
                dcount={employer.reportCounts[3]} dscore={employer.reportBreakdown[3]}
                />
              </>
            ))}
      </div>
      <Footer />

      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
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
  const db = client.db("unionshield");

  const data = await db.collection("employers").find({}).toArray()

  const employers = JSON.parse(JSON.stringify(data));
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  return {
    props: { employers },
  }
}

