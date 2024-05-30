import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './Header';
import Table1 from './Table1';

export default function Test() {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Header />
      <Table1 />
    </Container>
  )
}