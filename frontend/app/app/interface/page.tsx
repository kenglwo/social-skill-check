import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function Test() {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={1} />
        <Grid xs={10}>
          <div>Content here</div>
        </Grid>
        <Grid xs={1} />
      </Grid>
    </Box>
  )
}