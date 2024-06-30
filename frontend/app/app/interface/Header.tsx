import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const options = ["非常にあてはまる", "かなりあてはまる", "ややあてはまる", "あまりあてはまらない", "ほとんどあてはまらない", "全くあてはまらない"]
export default function Header() {

  return (
    <Box sx={{mt: 3, mb: 3}}>
      <Typography variant="h5" gutterBottom>
        社会人基礎力チェック表
      </Typography>
      <Stack direction="row" spacing={1}>
        {options.map((d, i) => (
          <div key={i}><strong>{6-i}:</strong> {d}</div>
        ))}
      </Stack>
  </Box>
  )
}