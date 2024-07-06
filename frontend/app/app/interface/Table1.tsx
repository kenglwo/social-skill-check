"use client";
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

import { ScoreData1, ScoreData2, ScoreData3, ScoreDataAll, initialScoreData1 } from "./types";

interface Props {
  updateScoreDataAllOnParent: (ability: keyof ScoreDataAll, newScoreData: ScoreData1 | ScoreData2 | ScoreData3) => void
}

export default function Table1(props: Props) {

  const [scoreData, setScoreData] = useState<ScoreData1>(initialScoreData1)

  const headerRows = ["能力要素", "No", "内容", "入職時", "6ヶ月", "12ヶ月", "課題・今後の行動目標など"]

  const tableRows = [
    {
      "ability_facotr": "主体性",
      "details": [
        {"content": "グループでの取り組みで、自分の役割は何かを見極めている", "example": "例：自分がやるべきことは何かを見極め、自発的に取り組むことができる", "question_id": "ability1_category1_q1"},
        {"content": "困難なことでも自分の強みを生かして取り組んでいる", "example": "例：自分の強み・弱みを把握し、困難なことでも自信を持って取り組むことができる", "question_id": "ability1_category1_q2"},
        {"content": "自分の役割や課題に対して自発的・自律的に行動している", "example": "例：自分なりに判断し、他者に流されず行動できる", "question_id": "ability1_category1_q3"},
      ]
    },
    {
      "ability_facotr": "働きかけ力",
      "details": [
        {"content": "メンバーの協力を得るために、協力の必要性や目的を伝えている", "example": "相手を納得させるために、協力することの必然性（意義、理由、内容など）を伝えることができる", "question_id": "ability1_category2_q1"},
        {"content": "状況に応じて効果的な協力を得るために、様々な手段を活用している", "example": "状況に応じて効果的に巻き込むために手段を活用することができる", "question_id": "ability1_category2_q2"},
        {"content": "グループの目標を達成するために積極的にメンバーに働きかけている", "example": "周囲の人を動かして目標を達成するパワーを持って働きかけることができる", "question_id": "ability1_category2_q3"},
      ]
    },
    {
      "ability_facotr": "実行力",
      "details": [
        {"content": "目標達成に向かって粘り強く取り組みを続けている", "example": "小さな成果に喜びを感じ、目標達成に向かって粘り強く取り組みを続けることができる", "question_id": "ability1_category3_q1"},
        {"content": "とにかくやってみようとする果敢さを持って課題に取り組んでいる", "example": "失敗を怖れずに、とにかくやってみようとする果敢さを持って、取り組むことができる", "question_id": "ability1_category3_q2"},
        {"content": "困難な状況から逃げずに目標に向かって取り組み続けている", "example": "強い意志を持ち、困難な状況から逃げずに取り組み続けることができる", "question_id": "ability1_category3_q3"},
      ]
    }
  ]

  const options = [1, 2, 3, 4, 5, 6]

  // @ts-ignore
  const handleScoreChanged = (question_key: string, answer_at: number) => (e) => {
    const selectedScore: number = e.target.value
    const question_id = `${question_key}_${answer_at}m`

    const newScoreData: ScoreData1 = {...scoreData, [question_id]: selectedScore}
    setScoreData(newScoreData)
    props.updateScoreDataAllOnParent("ability1", newScoreData)
  }

  const onSubmit = () => {
    
    console.log(scoreData)
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', mt: 5 }}>
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
    </Box>
  )
}