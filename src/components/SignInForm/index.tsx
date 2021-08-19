import React, { useState } from "react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { EnvelopeIcon, LockIcon } from "../../assets/Icons";

import { Button } from "../Form/Button";
import { Input } from "../Form/Input";
import { CircularProgress } from "@material-ui/core";

import { FormContainer } from "./styles";
import { SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { toast } from "react-toastify";

type LoginCredentialsType = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(14),
});

export const SignInForm = () => {
  const { formState, control, handleSubmit, watch } = useForm<LoginCredentialsType>({
    resolver: yupResolver(loginFormSchema),
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const watchEmail = watch("email");
  const watchPassword = watch("password");

  const isLoginValid = watchEmail && watchPassword !== "" && !formState.errors.email && !formState.errors.password ? false : true;

  const userRegister = useMutation(
    async (user: LoginCredentialsType) => {
      try {
        await api.post("/login", user);
        toast.success("Logado com sucesso!");
        // alert("Logado com sucesso!");
      } catch (error) {
        toast.error(error.message);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );

  const onSubmit: SubmitHandler<LoginCredentialsType> = async (values) => {
    // alert(JSON.stringify(values));
    await userRegister.mutateAsync(values);
  };

  console.log(isLoginValid);
  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <h1>Estamos quase lá.</h1>
      <p>Faça seu login para começar uma experiência incrível.</p>

      <div>
        <Controller
          control={control}
          name="email"
          render={({ field: { value = "", onChange, ref, name } }) => (
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              startIcon={<EnvelopeIcon />}
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.email && value !== ""}
              error={formState.errors.email}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value = "", onChange, ref, name } }) => (
            <Input
              id="password"
              placeholder="Senha"
              type={isVisiblePass ? "text" : "password"}
              required
              autoComplete="off"
              startIcon={<LockIcon />}
              endIcon={
                <IconActive
                  size={24}
                  id="passwordIcon"
                  onClick={() => setIsVisiblePass(!isVisiblePass)}
                  isVisiblePass={isVisiblePass}
                />
              }
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.password && value !== ""}
              error={formState.errors.password}
            />
          )}
        />

        <Link href="/forget-password">
          <a className="forgetPassTxt">Esqueci minha senha</a>
        </Link>

        <Button
          disabled={isLoginValid}
          containerClass="loginBtn"
          loading={formState.isSubmitting}
          loadingSize={25}
        >
          Login
        </Button>
        <Link href="/register" passHref>
          <a>
            <Button variant="transparent">Criar conta gratuita</Button>
          </a>
        </Link>
      </div>
    </FormContainer>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};