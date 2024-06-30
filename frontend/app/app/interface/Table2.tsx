"use client";
import * as React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
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

interface ScoreData {
    "ability2_category1_q1_0m": number;
    "ability2_category1_q2_0m": number;
    "ability2_category1_q3_0m": number;
    "ability2_category2_q1_0m": number;
    "ability2_category2_q2_0m": number;
    "ability2_category2_q3_0m": number;
    "ability2_category3_q1_0m": number;
    "ability2_category3_q2_0m": number;
    "ability2_category3_q3_0m": number;
    "ability2_category1_q1_6m": number;
    "ability2_category1_q2_6m": number;
    "ability2_category1_q3_6m": number;
    "ability2_category2_q1_6m": number;
    "ability2_category2_q2_6m": number;
    "ability2_category2_q3_6m": number;
    "ability2_category3_q1_6m": number;
    "ability2_category3_q2_6m": number;
    "ability2_category3_q3_6m": number;
    "ability2_category1_q1_12m": number;
    "ability2_category1_q2_12m": number;
    "ability2_category1_q3_12m": number;
    "ability2_category2_q1_12m": number;
    "ability2_category2_q2_12m": number;
    "ability2_category2_q3_12m": number;
    "ability2_category3_q1_12m": number;
    "ability2_category3_q2_12m": number;
    "ability2_category3_q3_12m": number;
}

export default function Table2() {
  const initialScoreData = {
    "ability2_category1_q1_0m": 0,
    "ability2_category1_q2_0m": 0,
    "ability2_category1_q3_0m": 0,
    "ability2_category2_q1_0m": 0,
    "ability2_category2_q2_0m": 0,
    "ability2_category2_q3_0m": 0,
    "ability2_category3_q1_0m": 0,
    "ability2_category3_q2_0m": 0,
    "ability2_category3_q3_0m": 0,
    "ability2_category1_q1_6m": 0,
    "ability2_category1_q2_6m": 0,
    "ability2_category1_q3_6m": 0,
    "ability2_category2_q1_6m": 0,
    "ability2_category2_q2_6m": 0,
    "ability2_category2_q3_6m": 0,
    "ability2_category3_q1_6m": 0,
    "ability2_category3_q2_6m": 0,
    "ability2_category3_q3_6m": 0,
    "ability2_category1_q1_12m": 0,
    "ability2_category1_q2_12m": 0,
    "ability2_category1_q3_12m": 0,
    "ability2_category2_q1_12m": 0,
    "ability2_category2_q2_12m": 0,
    "ability2_category2_q3_12m": 0,
    "ability2_category3_q1_12m": 0,
    "ability2_category3_q2_12m": 0,
    "ability2_category3_q3_12m": 0,
  }

  const [scoreData, setScoreData] = useState<ScoreData>(initialScoreData)

  const headerRows = ["能力要素", "No", "内容", "入職時", "6ヶ月", "12ヶ月", "課題・今後の行動目標など"]

  const tableRows = [
    {
      "ability_facotr": "課題発見力`",
      "details": [
        {"content": "目標達成のために現段階での課題を的確に把握している", "example": "成果のイメージを明確にして、その実現のために現段階でなすべきことを的確に把握できる", "question_id": "ability2_category1_q1"},
        {"content": "現状を正しく認識するための情報収集や分析をしている", "example": "現状を正しく認識するための情報収集や分析ができる", "question_id": "ability2_category1_q2"},
        {"content": "課題を明らかにするために、他者の意見を積極的に求めている", "example": "課題を明らかにするために、他者の意見を積極的に求めることができる", "question_id": "ability2_category1_q3"},
      ]
    },
    {
      "ability_facotr": "計画力",
      "details": [
        {"content": "目標達成までのプロセスを明確化し、実現性の高い計画を立てている", "example": "作業のプロセスを明らかにして優先順位をつけ、実現性の高い計画を立てられる", "question_id": "ability2_category2_q1"},
        {"content": "目標達成までの計画と実際の進み具合の違いに留意している", "example": "常に計画と進捗状況の違いに留意することができる", "question_id": "ability2_category2_q2"},
        {"content": "計画の進み具合や不測の事態に合わせて、柔軟に計画を修正している", "example": "進捗状況や不測の事態に合わせて、柔軟に計画を修正できる", "question_id": "ability2_category2_q3"},
      ]
    },
    {
      "ability_facotr": "創造力",
      "details": [
        {"content": "複数のもの・考え方・技術等を組み合わせ、新しいものを作り出している", "example": "複数のもの（もの、考え方、技術等）を組み合わせて、新しいものを作り出すことができる", "question_id": "ability2_category3_q1"},
        {"content": "従来の常識や発想を転換し、新しいものや解決策を作り出している", "example": "従来の常識や発想を転換し、新しいものや解決策を作り出すことができる", "question_id": "ability2_category3_q2"},
        {"content": "目標達成を意識し、新しいものを生み出すためのヒントを探している", "example": "成功イメージを常に意識しながら、新しいものを生み出すためのヒントを探すことができる", "question_id": "ability2_category3_q3"},
      ]
    }
  ]

  const options = [1, 2, 3, 4, 5, 6]

  // @ts-ignore
  const handleScoreChanged = (question_key: string, answer_at: number) => (e) => {
    const selectedScore: number = e.target.value
    const question_id = `${question_key}_${answer_at}m`
    setScoreData(prevData => ({...prevData, [question_id]: selectedScore}))
    console.log(scoreData)
  }

  const onSubmit = () => {
    console.log(scoreData)
  }

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
                        onChange={handleScoreChanged(d.question_id, 0)}
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
                        onChange={handleScoreChanged(d.question_id, 6)}
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
                        onChange={handleScoreChanged(d.question_id, 12)}
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
      <Button variant="contained" sx={{backgroundColor: '#6ba5ee'}} onClick={onSubmit}>Submit</Button>
    </Box>
  )
}