import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Navbar from '../components/Navbar'
import SurveyContent from '../components/SurveyContent'
import Footer from '../components/Footer'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import ChooseEmployer from '../components/ChooseEmployer'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Card, CardFooter, Button } from 'shards-react'

export default class FullSurvey extends React.Component {
    constructor({ employers }){
      super({ employers });
      this.changeArray.bind(this);
      this.state={
        db: employers,
        arrScores: [-1, -1, -1, -1],
        employerInput: '',
      }
    }

    changeArray = (value, index) =>{
      var temp = this.state.arrScores;
      temp[index] = value;
      this.setState({arrScores: temp});
    }

    changeInput = (name) =>{
      this.setState({employerInput: name});
    }

    render(){
        return (
          <div>
            <Head>
              <title>Full Survey | Union Shield</title>
              <link rel="icon" href="smalllogo.png" />
            </Head>

            <Navbar />
            <SurveyContent type="full" changeArray={this.changeArray} />
            <ChooseEmployer changeInput={this.changeInput} db={this.state.employers} />
            <div className="flex flex-wrap">
                  {this.state.db && this.state.db.map(employer => (
                      <div>
                      <h2>{employer.employerName}</h2>
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
}
export async function getServerSideProps(context) {
  const client = await clientPromise
  const db = client.db("unionshield");

  const data = await db.collection("employers").find({}).limit(20).toArray()

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

