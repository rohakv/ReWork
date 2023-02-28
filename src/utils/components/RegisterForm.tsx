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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
  
export function AuthenticationForm() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async (e: any) => {

      e.preventDefault();

      const toastId = toast.loading("Please wait...");

      if (!username) toast.update(toastId, { render: "Please enter an username!", type: "warning", isLoading: false, closeButton: true });
      if (!password) toast.update(toastId, { render: "Please enter a password!", type: "warning", isLoading: false, closeButton: true });
      if (!email) toast.update(toastId, { render: "Please enter an email!", type: "warning", isLoading: false, closeButton: true });

      

      if (username && password && email) {
        const payload = {
          username,
          password,
          email
        }

        toast.update(toastId, { render: "Creating your account", isLoading: true });

        const req: any = await axios.post("/api/v1/auth/register", payload)
        .catch((err) => {
          toast.update(toastId, { render: "Something doesn't feel right", type: "error", isLoading: false });
        });

        toast.update(toastId, { render: "Created your account", isLoading: false, type: "success", autoClose: 1000 });

        await setTimeout('', 3000);

        router.push("/login");
      }
    }

    return (
      <>
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
      <ToastContainer limit={10}/>
      </>
    );
  }