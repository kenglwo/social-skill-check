"use client"
import React from 'react';
import Box from '@mui/material/Box';
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

const RadarCharts: React.FC<RadarChartsProps> = ({ data }) => {
  const abilities = [1, 2, 3];

  const generateChartData = (abilityNum: number, recordedAt: number) => {
    const filteredData = data.filter(item => item.ability_num === abilityNum).filter(item => item.recorded_at === recordedAt);

    return {
      labels: filteredData.map(item => `Category ${item.category_num}`),
      datasets: [
        {
          label: `Ability ${abilityNum}`,
          data: filteredData.map(item => item.total_score),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const chartOptions: ChartOptions<'radar'> = {
    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 20,
        ticks: {
          stepSize: 5,
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
    <Box>
      <Box sx={{width: "300px", height: "300px"}}>
        <h2>Ability 1</h2>
        <Radar data={generateChartData(1, 0 )} />
      </Box>
      <Box sx={{width: "300px", height: "300px"}}>
        <h2>Ability 2</h2>
        <Radar data={generateChartData(2, 0 )} />
      </Box>
      <Box sx={{width: "300px", height: "300px"}}>
        <h2>Ability 3</h2>
        <Radar data={generateChartData(3, 0 )} />
      </Box>
    </Box>
  );
};

export default RadarCharts;