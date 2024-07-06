"use client"
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/system/Stack';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import "./custom.css"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


interface ScoreData {
  ability_num: number;
  category_num: number;
  total_score: number;
  recorded_at: number; 
}

interface RadarChartsProps {
  data: ScoreData[];
}
interface CategoryLabelsAll {
    "ability_1": string;
    "ability_2": string;
    "ability_3": string;
}

const RadarCharts: React.FC<RadarChartsProps> = ({ data }) => {
  const abilities = [1, 2, 3];

  const abilityLabels = ["1. 前に踏み出す力（アクション）", "2. 考え抜く力（シンキング）", "３.チームで働く力（チームワーク）"]
  const categoryLabelsAll = {
    "ability_1": ["主体性", "働きかけ力", "実行力"],
    "ability_2": ["課題発見力", "計画力", "創造力"],
    "ability_3": ["発信力", "傾聴力", "柔軟性", "状況把握力", "規律性", "ストレスコントロール力"]
  }


  const generateChartData = (abilityNum: number, recordedAt: number) => {
    const filteredData = data.filter(item => item.ability_num === abilityNum).filter(item => item.recorded_at === recordedAt);
    console.log(filteredData)
    const key_ability = `ability_${abilityNum}` as keyof CategoryLabelsAll; // Type assertion
    const categoryLabels = categoryLabelsAll[key_ability]

    return {
      // labels: filteredData.map(item => `Category ${item.category_num}`),
      labels: categoryLabels,
      datasets: [
        {
          label: abilityLabels[abilityNum-1],
          data: filteredData.map(item => item.total_score),
          backgroundColor: abilityNum === 1 ? 'rgba(54, 162, 235, 0.2)' :
                          abilityNum === 2 ? 'rgba(255, 99, 132, 0.2)' :
                          'rgba(255, 206, 86, 0.2)',
          borderColor: abilityNum === 1 ? 'rgba(54, 162, 235, 1)' :
                        abilityNum === 2 ? 'rgba(255, 99, 132, 1)' :
                        'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const chartOptions1: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 18,
        ticks: {
          stepSize: 3,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: '#000',
          font: {
            size: 14,
          },
        },
      },
    },
  };
  
  const chartOptions2: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 18,
        ticks: {
          stepSize: 3,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: '#000',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  const chartOptions3: ChartOptions<'radar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 0,
        max: 18,
        ticks: {
          stepSize: 3,
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: '#000',
          font: {
            size: 14,
          },
        },
      },
    },
  };


  return (
    <>
      <Box sx={{mb: 5}}>
        <Typography variant="h5">入職時</Typography>
        <Stack direction="row" spacing={5}>
          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(1, 0 )} options={chartOptions1} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 1).filter(d => d.recorded_at === 0).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(2, 0 )} options={chartOptions2} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 2).filter(d => d.recorded_at === 0).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(3, 0 )} options={chartOptions3} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 3).filter(d => d.recorded_at === 0).reduce((sum, item) => sum + item.total_score, 0)}/108
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box sx={{mb: 5}}>
        <Typography variant="h5">6ヶ月</Typography>
        <Stack direction="row" spacing={5}>
          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(1, 6 )} options={chartOptions1} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 1).filter(d => d.recorded_at === 6).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(2, 6 )} options={chartOptions2} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 2).filter(d => d.recorded_at === 6).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(3, 6 )} options={chartOptions3} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 3).filter(d => d.recorded_at === 6).reduce((sum, item) => sum + item.total_score, 0)}/108
              </Typography>
            </Box>
          </Stack>

        </Stack>
      </Box>

      <Box sx={{mb: 5}}>
        <Typography variant="h5">12ヶ月</Typography>
        <Stack direction="row" spacing={5}>
          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(1, 12 )} options={chartOptions1} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 1).filter(d => d.recorded_at === 12).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(2, 12 )} options={chartOptions2} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 2).filter(d => d.recorded_at === 12).reduce((sum, item) => sum + item.total_score, 0)}/63
              </Typography>
            </Box>
          </Stack>

          <Stack  spacing={1} sx={{flex: "display", alignItems: "center"}}>
            <Box sx={{width: "400px", height: "400px"}}>
              <Radar data={generateChartData(3, 12 )} options={chartOptions3} />
            </Box>
            <Box className="score_result">
              <Typography variant="h5">
                {data.filter(d => d.ability_num === 3).filter(d => d.recorded_at === 12).reduce((sum, item) => sum + item.total_score, 0)}/108
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default RadarCharts;