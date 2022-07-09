import {
  Alert,
  AlertIcon,
  Box,
  CloseButton,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import FormField from "../components/auth/FormField";
import RoleMenu from "../components/auth/RoleMenu";
import Button from "../components/Button";
import Card from "../components/Card";
import errors from "../utils/authErrors";

const Login: NextPage = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: false });

  const { error } = useRouter().query;

  useEffect(() => {
    if (error) {
      onOpen();
    }
  }, [error]);

  const loginHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const role = roleRef.current?.value;

    usernameRef.current!.value = "";
    passwordRef.current!.value = "";
    roleRef.current!.value = "";

    signIn("credentials", {
      username,
      password,
      role,
      callbackUrl: "/",
    });
  };

  return (
    <>
      {isVisible && (
        <Alert status="error">
          <AlertIcon />
          {errors[error as string]}
          <CloseButton
            className="ml-auto"
            onClick={() => {
              console.log("closing");
              onClose();
            }}
          />
        </Alert>
      )}
      <Card className="container mx-auto max-w-max mt-[25vh] p-10">
        <form method="POST" onSubmit={loginHandler}>
          <Box className="mb-3">
            <Alert className="rounded-md" status="info">
              <AlertIcon />
              username SELLER
              <br />
              password seller
            </Alert>
            <Divider />
            <Alert className="rounded-md" status="info">
              <AlertIcon />
              username BUYER
              <br />
              password buyer
            </Alert>
          </Box>
          <FormField
            ref={usernameRef}
            label="Username"
            id="username"
            helperText="Enter your username"
            errorText="Username is required"
            type="text"
          />

          <FormField
            ref={passwordRef}
            label="Password"
            id="password"
            helperText="Enter your password"
            errorText="Password is required"
            type="password"
          />
          <RoleMenu ref={roleRef} />
          <Button className="mt-3 mx-auto bg-indigo-600">Sign-in</Button>
        </form>
      </Card>
    </>
  );
};

export default Login;
