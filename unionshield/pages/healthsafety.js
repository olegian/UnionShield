import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Navbar from '../components/Navbar'
import SurveyContent from '../components/SurveyContent'
import Footer from '../components/Footer'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import ChooseEmployer from '../components/ChooseEmployer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Card, CardFooter, Button } from 'shards-react'
import { calculateObjectSize } from 'bson'

export default class HealthSafety extends React.Component {
    constructor({ employers }){
      super({ employers });
      this.changeArray.bind(this);
      this.state={
        db: employers,
        arrScores: [-1, -1, -1, -1],
        employerInput: '',
        showResults: false,
      }
    }

    changeArray = (value, index) =>{
      var temp = this.state.arrScores;
      temp[index] = value;
      this.setState({arrScores: temp});
    }

    changeInput = (name) =>{
      this.setState({employerInput: 'Amazon'});
      this.calculate();
    }

    calculate = () =>{
      this.setState({
        showResults: true,
      })
    }

    render(){
        return (
          <div>
            <Head>
              <title>Health and Safety Survey | Union Shield</title>
              <link rel="icon" href="smalllogo.png" />
            </Head>

            <Navbar />
            <SurveyContent type="healthSafety" changeArray={this.changeArray} />
            {/* <ChooseEmployer changeInput={this.changeInput} db={this.state.employers} /> */}
            <Card className="m-5 p-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Employer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                >
                  {this.state.db && this.state.db.map(employer => (
                        <MenuItem value={employer.employerName}>{employer.employerName}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button onClick={this.changeInput}>Submit Report</Button>
            </Card>

            {this.state.showResults &&
              <Card className="content m-5 p-5">
                <h2>Your Health and Safety score for {this.state.employerInput} is:
                {' ' + parseInt(100 * ((this.state.arrScores[1])+3)/33)}%</h2>
                <Button>View current ESS scores for {this.state.employerInput}</Button>
              </Card>
            }

            {/* <div className="flex flex-wrap">
                  {this.state.db && this.state.db.map(employer => (
                      <div>
                      <h2>{employer.employerName}</h2>
                      </div>
                  ))}
            </div> */}
            
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

