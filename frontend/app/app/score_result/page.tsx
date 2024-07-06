"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ScoreData1, ScoreData2, ScoreData3, ScoreDataAll, initialScoreDataAll } from './types';

export default function ScoreResult() {
  const router = useRouter();


  return (
    <Container maxWidth="lg" disableGutters={true}>
      <div>Score Result</div>
    </Container>
  )
}