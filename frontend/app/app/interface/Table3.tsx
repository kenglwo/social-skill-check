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
import { ScoreData1, ScoreData2, ScoreData3, ScoreDataAll, initialScoreData3 } from "./types";

interface Props {
  updateScoreDataAllOnParent: (ability: keyof ScoreDataAll, newScoreData: ScoreData1 | ScoreData2 | ScoreData3) => void
}

export default function Table3(props: Props) {

  const [scoreData, setScoreData] = useState<ScoreData3>(initialScoreData3)

  const headerRows = ["能力要素", "No", "内容", "入職時", "6ヶ月", "12ヶ月", "課題・今後の行動目標など"]

  const tableRows = [
    {
      "ability_facotr": "発信力",
      "details": [
        {"content": "グループでの取り組みで、メンバーに情報をわかりやすく伝えている", "example": "事例や客観的なデータ等を用いて、具体的に分かりやすく伝えることができる", "question_id": "ability3_category1_q1"},
        {"content": "メンバーがどのような情報を求めているかを理解して伝えている", "example": "聞き手がどのような情報を求めているかを理解して伝えることができる", "question_id": "ability3_category1_q2"},
        {"content": "話そうとすることを自分なりに理解した上でメンバーに伝えている", "example": "話そうとすることを自分なりに十分理解し相手に伝えることができる", "question_id": "ability3_category1_q3"},
      ]
    },
    {
      "ability_facotr": "傾聴力",
      "details": [
        {"content": "内容の確認や質問等を行いながら、メンバーの意見を理解している", "example": "内容の確認や質問等を行いながら、相手の意見を正確に理解することができる", "question_id": "ability3_category2_q1"},
        {"content": "相槌や共感等により、メンバーに話しやすい状況を作っている", "example": "相槌や共感等により、相手に話しやすい状況を作ることができる", "question_id": "ability3_category2_q2"},
        {"content": "先入観や思い込みをせずに、メンバーの話を聞いている", "example": "相手の話を素直に聴くことができる", "question_id": "ability3_category2_q3"},
      ]
    },
    {
      "ability_facotr": "柔軟性",
      "details": [
        {"content": "自分の意見を持ちながら、メンバーの意見も共感を持って受け入れている", "example": "自分の意見を持ちながら、他人の言い意見も共感を持って受け入れることができる", "question_id": "ability3_category3_q1"},
        {"content": "なぜそのように考えるのか、メンバーの気持ちになって理解している", "example": "相手がなぜそのように考えるかを、相手の気持ちになって理解することができる", "question_id": "ability3_category3_q2"},
        {"content": "立場の異なるメンバーの背景や事情を理解している", "example": "立場の異なる相手の背景や事情を理解することができる", "question_id": "ability3_category3_q3"}
      ]
    },
    {
      "ability_facotr": "状況把握力",
      "details": [
        {"content": "周囲から期待されている自分の役割を把握して、行動している", "example": "周囲から期待されている自分の役割を把握して、行動することができる", "question_id": "ability3_category4_q1"},
        {"content": "自分にできる事・他のメンバーができることを判断して行動している", "example": "自分にできること、他人ができることを的確に判断して行動することができる", "question_id": "ability3_category4_q2"},
        {"content": "周囲の人間関係や忙しさを把握し、状況に配慮した行動をとっている", "example": "周囲の人の状況（人間関係、忙しさなど）に配慮して、良い方向へ向かうように行動することができる", "question_id": "ability3_category4_q3"}
      ]
    },
    {
      "ability_facotr": "規律性",
      "details": [
        {"content": "メンバーに迷惑をかけないように、ルールや約束・マナーを理解している", "example": "相手に迷惑をかけないよう、最低限守らなければならないルールや約束・マナーを理解する", "question_id": "ability3_category5_q1"},
        {"content": "メンバーに迷惑をかけたとき、適切な事後の対応をしている", "example": "相手に迷惑をかけたとき、適切な行動をとることができる", "question_id": "ability3_category5_q2"},
        {"content": "規律や礼儀が求められる場面では、礼節を守った振る舞いをしている", "example": "規律や礼儀が特に求められる場面では、粗相のないように正しくふるまうことができる", "question_id": "ability3_category5_q3"}
      ]
    },
    {
      "ability_facotr": "ストレスコントロール力",
      "details": [
        {"content": "グループでの取り組みでストレスを感じる時、その原因について考えている", "example": "ストレスの原因を見つけて、自力で、または他人の力を借りてでも取り除くことができる", "question_id": "ability3_category6_q1"},
        {"content": "人に相談したり、支援を受けたりして、ストレスを緩和している", "example": "他人に相談したり、別のことに取り組んだりするなどにより、ストレスを一時的に緩和できる", "question_id": "ability3_category6_q2"},
        {"content": "ストレスを感じても、考え方を切り替え、コントロールしている", "example": "ストレスを感じることは一過性、または当然のことと考え、重く受け止めすぎないようにする", "question_id": "ability3_category6_q3"}
      ]
    }
  ]

  const options = [1, 2, 3, 4, 5, 6]

  // @ts-ignore
  const handleScoreChanged = (question_key: string, answer_at: number) => (e) => {
    const selectedScore: number = e.target.value
    const question_id = `${question_key}_${answer_at}m`

    const newScoreData: ScoreData3 = {...scoreData, [question_id]: selectedScore}
    setScoreData(newScoreData)
    props.updateScoreDataAllOnParent("ability3", newScoreData)
  }

  const onSubmit = () => {
    console.log(scoreData)
  }

  return (
    <Box sx={{ width: '100%', overflowX: 'auto', mt:5 }}>
      <strong>
      ３.チームで働く力（チームワーク）
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