"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@mui/material/Container';
// import { ScoreData1, ScoreData2, ScoreData3, ScoreDataAll, initialScoreDataAll } from '../types';
import RadarCharts from "./RadarChart";

interface CalculatedScoreData {
  ability_num: number;
  category_num: number;
  total_score: number;
  recorded_at: number; 
}

export default function ScoreResult() {
  const router = useRouter();

  const [userId, setUserId] = useState<string>("");
  const searchParams = useSearchParams();
  const [isReady, setIsReady] = useState(false);

  const [calculatedScoreData, setCalculatedScoreData] = useState<CalculatedScoreData[]>([])

  useEffect(() => {
    // Check if the user_id query parameter is available
    const userId = searchParams.get('user_id');
    if (userId !== null) {
      setUserId(userId);
      setIsReady(true);

      // get calculated score data
      getCalculatedScoreData(userId)

      const calculatedScoreDataAt0 = calculatedScoreData.filter(d => d.recorded_at === 0)
      console.log(calculatedScoreDataAt0)


    }
  }, [searchParams]);

  const getCalculatedScoreData = async (userId: string) => {
    const URL: string | undefined = `${process.env.NEXT_PUBLIC_API_URL}/get_calculated_scores?user_id=${userId}`;
    if (URL !== undefined) {
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setCalculatedScoreData(responseData)
    }
  }

  if (!isReady) {
    return <div>Loading...</div>; // You can show a loading spinner or message here
  }

  return (
    <Container maxWidth="lg" disableGutters={true} sx={{mt: 5}}>
      <RadarCharts data={calculatedScoreData} />
    </Container>
  )
}