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
        <div><strong>6:</strong> 非常にあてはまる</div>
        <div><strong>5:</strong> かなりあてはまる</div>
        <div><strong>4:</strong> ややあてはまる</div>
        <div><strong>3:</strong> あまりあてはまらあい</div>
        <div><strong>2:</strong> ほとんどあてはまらない</div>
        <div><strong>1:</strong> 全くあてはまらない</div>
      </Stack>
  </Box>
  )
}