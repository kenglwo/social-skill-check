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

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Table1() {

  // const [studentList, setStudentList] = useState<StudentList[]>();

  const headerRows = ["能力要素", "No", "内容", "入職時", "6ヶ月", "12ヶ月", "例", "課題・今後の行動目標など"]

  const tableRows = [
    {
      "ability_facotr": "主体性",
      "details": [
        {"content": "グループでの取り組みで、自分の役割は何かを見極めている", "example": "自分がやるべきことは何かを見極め、自発的に取り組むことができる"},
        {"content": "困難なことでも自分の強みを生かして取り組んでいる", "example": "自分がやるべきことは何かを見極め、自発的に取り組むことができる"},
        {"content": "自分の役割や課題に対して自発的・自律的に行動している", "example": "自分がやるべきことは何かを見極め、自発的に取り組むことができる"},
      ]
    }
  ]

  const options = [1, 2, 3, 4, 5, 6]

  return (
    <Box sx={{ width: '100%', overflowX: 'auto' }}>
      <strong>
        1. 前に踏み出す力（アクション）
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
                    <TableCell sx={{ whiteSpace: 'nowrap' }}>{d.example}</TableCell>
                    <TableCell>
                      <TextField
                        // value={row.name}
                        // onChange={(e) => handleInputChange(e, row.id)}
                        variant="outlined"
                        fullWidth
                      />
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