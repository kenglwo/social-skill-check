"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

export default function Login() {
  const [userId, setUserId] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter();

  const onUserIdChanged = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newUserId: string = e.target.value
    setUserId(newUserId)
  }

  const onPasswordChanged = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPassword: string = e.target.value
    setPassword(newPassword)
  }

  const onClick = () => {
    console.log(userId)
    console.log(password)
    // router.push(`/interface?user_id=${'user1'}`);  
  }


  return (
    <Container maxWidth="lg" sx={{ m: 5}}>
      <Typography variant="h3" gutterBottom sx={{mb: 5}}>
       Login Page
      </Typography>

      <Stack direction="row" sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" sx={{mr: 5}}>
          User ID
        </Typography>
        <TextField
            required
            label="required"
            sx={{ml:3}}
            onChange={onUserIdChanged}
        />
      </Stack>

      <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" sx={{mr: 5}}>
          Password
        </Typography>
        <TextField
            required
            type="password"
            label="required"
            onChange={onPasswordChanged}
        />
      </Stack>
      <Button variant="contained" sx={{backgroundColor: '#6ba5ee', mt: 4}} onClick={onClick}>Submit</Button>
    </Container>
  )
}