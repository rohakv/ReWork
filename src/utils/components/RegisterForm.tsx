import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';

import axios from "axios";

import React, { useState, useEffect } from "react";
  
  export function AuthenticationForm() {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const registerUser = async (e: any) => {
      e.preventDefault();
      if (!username) throw new Error("No username");
      if (!password) throw new Error("No password");
      if (!email) throw new Error("No email");

      if (username && password && email) {
        const payload = {
          username,
          password,
          email
        }

        const req = await axios.post("/api/v1/auth/register", payload);
        console.log(req.data);
      }
    }

    return (
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Register!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Log in
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Username" placeholder="Your username..." required onChange={(e) => setUsername(e.target.value)} />
          <TextInput label="Email" placeholder="you@email.com" required mt="md" onChange={(e) => setEmail(e.target.value)} />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={(e) => setPassword(e.target.value)} />
          <Button fullWidth mt="xl" onClick={registerUser}>
            Register
          </Button>
        </Paper>
      </Container>
    );
  }