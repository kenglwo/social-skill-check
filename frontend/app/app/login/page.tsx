"use client";
import React from 'react'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function Login() {
  const [userId, setUserId] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isUserIdValid, setIsUseIdValid] = useState<boolean | null>(null)
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null)
  const router = useRouter();

  const onUserIdChanged = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newUserId: string = e.target.value
    setUserId(newUserId)
  }

  const onPasswordChanged = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newPassword: string = e.target.value
    setPassword(newPassword)
  }

  const onClick = async () => {
    userId !== "" ? setIsUseIdValid(true) : setIsUseIdValid(false)
    password !== "" ? setIsPasswordValid(true) : setIsPasswordValid(false)

    console.log(userId)
    console.log(password)

    // check userId and password is not empty
    if (isUserIdValid && isPasswordValid) {
      // TODO: check with db
      const URL: string | undefined = `${process.env.NEXT_PUBLIC_API_URL}/user_authentication`;
      if (URL !== undefined) {
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user_id: userId, password: password}),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json()
        console.log(data)


      }

      // router.push(`/interface?user_id=${'user1'}`);  

    }
  }


  return (
    <Container maxWidth="lg" sx={{ m: 5}}>
      <Typography variant="h3" gutterBottom sx={{mb: 5}}>
        ログインページ
      </Typography>

      <Stack direction="row" sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Typography variant="h5" sx={{mr: 2}}>
          ユーザーID
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
          パスワード
        </Typography>
        <TextField
            required
            type="password"
            label="required"
            onChange={onPasswordChanged}
        />
      </Stack>
      <Button variant="contained" sx={{backgroundColor: '#6ba5ee', mt: 4}} onClick={onClick}>Submit</Button>
      {isUserIdValid === false && <Alert severity="error" sx={{mt: 5}}>ユーザーIDを入力して下さい</Alert>}
      {isPasswordValid === false && <Alert severity="error" sx={{mt: 5}}>パスワードを入力して下さい</Alert>}
    </Container>
  )
}