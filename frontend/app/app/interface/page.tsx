import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import { ScoreDataAll, initialScoreDataAll } from './types';

export default function Test() {
  const [scoreData, setScoreData] = useState<ScoreDataAll>(initialScoreDataAll)

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Header />
      <Table1 />
      <Table2 />
      <Table3 />
    </Container>
  )
}