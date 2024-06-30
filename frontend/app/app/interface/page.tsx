"use client";
import { useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Header from './Header';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import { ScoreData1, ScoreData2, ScoreData3, ScoreDataAll, initialScoreDataAll } from './types';

export default function Test() {
  const [scoreDataAll, setScoreDataAll] = useState<ScoreDataAll>(initialScoreDataAll)

  const updateScoreDataAllOnParent = (ability: keyof ScoreDataAll, newScoreData: ScoreData1 | ScoreData2 | ScoreData3
  ) => {
    const newScoreDataAll: ScoreDataAll = {...scoreDataAll, [ability]: newScoreData}
    console.log(newScoreDataAll)

    setScoreDataAll(prevState => ({
      ...prevState,
      [ability]: newScoreData
    }))
  }

  const onSubmit = () => {
    // get score data from child tables
  }

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Header />
      <Table1
       updateScoreDataAllOnParent={updateScoreDataAllOnParent}
      />
      <Table2 
       updateScoreDataAllOnParent={updateScoreDataAllOnParent}
      />
      <Table3 
       updateScoreDataAllOnParent={updateScoreDataAllOnParent}
      />
      <Button variant="contained" sx={{backgroundColor: '#6ba5ee'}} onClick={onSubmit}>Submit</Button>
    </Container>
  )
}