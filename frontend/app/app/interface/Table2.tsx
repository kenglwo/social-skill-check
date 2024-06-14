import * as React from "react";
import { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Table2() {

  // const [studentList, setStudentList] = useState<StudentList[]>();

  const headerRows = ["能力要素", "No", "内容", "入職時", "6ヶ月", "12ヶ月", "課題・今後の行動目標など"]

  const tableRows = [
    {
      "ability_facotr": "課題発見力`",
      "details": [
        {"content": "目標達成のために現段階での課題を的確に把握している", "example": "成果のイメージを明確にして、その実現のために現段階でなすべきことを的確に把握できる"},
        {"content": "現状を正しく認識するための情報収集や分析をしている", "example": "現状を正しく認識するための情報収集や分析ができる"},
        {"content": "課題を明らかにするために、他者の意見を積極的に求めている", "example": "課題を明らかにするために、他者の意見を積極的に求めることができる"},
      ]
    },
    {
      "ability_facotr": "計画力",
      "details": [
        {"content": "目標達成までのプロセスを明確化し、実現性の高い計画を立てている", "example": "作業のプロセスを明らかにして優先順位をつけ、実現性の高い計画を立てられる"},
        {"content": "目標達成までの計画と実際の進み具合の違いに留意している", "example": "常に計画と進捗状況の違いに留意することができる"},
        {"content": "計画の進み具合や不測の事態に合わせて、柔軟に計画を修正している", "example": "進捗状況や不測の事態に合わせて、柔軟に計画を修正できる"},
      ]
    },
    {
      "ability_facotr": "創造力",
      "details": [
        {"content": "複数のもの・考え方・技術等を組み合わせ、新しいものを作り出している", "example": "複数のもの（もの、考え方、技術等）を組み合わせて、新しいものを作り出すことができる"},
        {"content": "従来の常識や発想を転換し、新しいものや解決策を作り出している", "example": "従来の常識や発想を転換し、新しいものや解決策を作り出すことができる"},
        {"content": "目標達成を意識し、新しいものを生み出すためのヒントを探している", "example": "成功イメージを常に意識しながら、新しいものを生み出すためのヒントを探すことができる"},
      ]
    }
  ]

  const options = [1, 2, 3, 4, 5, 6]

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', mt:5 }}>
      <strong>
        2. 考え抜く力（シンキング）
      </strong>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headerRows.map((d, i) => (
                <TableCell key={i} align="center" sx={{ whiteSpace: 'nowrap' }}><strong>{d}</strong></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((item, i) => (
              <React.Fragment key={i}>
                <TableRow>
                  <TableCell rowSpan={item.details.length+1}>
                    <strong>{item.ability_facotr}</strong>
                  </TableCell>
                </TableRow>
                {item.details.map((d, i) => (
                  <TableRow key={i}>
                    <TableCell><strong>{i+1}</strong></TableCell>
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{d.content}</TableCell>
                    <TableCell>
                      <TextField
                        // onChange={(e) => handleInputChange(e, row.id)}
                        type="number"
                        variant="outlined"
                        fullWidth
                        select
                      >
                        {options.map((d) => (
                          <MenuItem key={d} value={d}>
                            {d}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        // onChange={(e) => handleInputChange(e, row.id)}
                        type="number"
                        variant="outlined"
                        fullWidth
                        select
                      >
                        {options.map((d) => (
                          <MenuItem key={d} value={d}>
                            {d}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <TextField
                        // onChange={(e) => handleInputChange(e, row.id)}
                        type="number"
                        variant="outlined"
                        fullWidth
                        select
                      >
                        {options.map((d) => (
                          <MenuItem key={d} value={d}>
                            {d}
                          </MenuItem>
                        ))}
                      </TextField>
                    </TableCell>
                    <TableCell>
                      <Tooltip title={d.example} arrow>
                        <TextField
                          // value={row.name}
                          // onChange={(e) => handleInputChange(e, row.id)}
                          variant="outlined"
                          fullWidth
                          placeholder={d.example}
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}