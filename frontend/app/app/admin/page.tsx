"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Admin() {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ m: 5}}>
      <Typography variant="h3" gutterBottom sx={{mb: 5}}>
        管理者ページ
      </Typography>
    </Container>
  )
}