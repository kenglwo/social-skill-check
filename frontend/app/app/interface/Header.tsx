import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const options = ["非常にあてはまる", "かなりあてはまる", "ややあてはまる", "あまりあてはまらあい", "ほとんどあてはまらない", "全くあてはまらない"]
export default function Header() {

  return (
      <Box >
        <Typography variant="h5" gutterBottom>
          社会人基礎力チェック表
      </Typography>
      <Stack direction="row" spacing={1}>
        <div><strong>I:</strong> 非常にあてはまる</div>
        <div><strong>II:</strong> かなりあてはまる</div>
        <div><strong>III:</strong> ややあてはまる</div>
        <div><strong>IV:</strong> あまりあてはまらあい</div>
        <div><strong>V:</strong> ほとんどあてはまらない</div>
        <div><strong>VI:</strong> 全くあてはまらない</div>
      </Stack>
    </Box>
  )
}