"use client"

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

import * as S from "./styles/page.styles"
import Button from "@/components/Button"

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [message, setMessage] = useState("")

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    })

    const result = await res.json()

    if (res.ok) {
      setMessage("Registration successful!")
    }
    if (result.error.code === "ER_DUP_ENTRY") {
      setMessage("This email has already been registered")
    } else {
      setMessage(result.message || "Registration failed")
    }
  }

  const onSuccess = async (response) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/google/callback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response.credential }),
        }
      )

      const result = await res.json()

      if (res.ok) {
        setMessage("Google login successful!")
        localStorage.setItem("token", result.token)
        router.push("/")
      }

      if (result.errorMessage.code === "ER_DUP_ENTRY") {
        setMessage("This email has already been registered")
      } else {
        setMessage(result.message || "Google login failed")
      }
    } catch (error) {
      setMessage("Google login failed")
    }
  }

  const onFailure = (error) => {
    setMessage("Google login failed")
    console.error(error)
  }

  // Watch for password confirmation match
  const password = watch("password")

  return (
    <S.RegisterSection>
      <S.RegisterTitle>Register</S.RegisterTitle>
      <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <S.RegisterFormInput>
          <S.RegisterInput
            type="text"
            name="username"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <S.RegisterInputErrorMessage>
              {errors.username.message}
            </S.RegisterInputErrorMessage>
          )}
        </S.RegisterFormInput>
        <S.RegisterFormInput>
          <S.RegisterInput
            type="email"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors?.email && (
            <S.RegisterInputErrorMessage>
              {errors?.email?.message}
            </S.RegisterInputErrorMessage>
          )}
        </S.RegisterFormInput>
        <S.RegisterFormInput>
          <S.RegisterInput
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <S.RegisterInputErrorMessage>
              {errors.password.message}
            </S.RegisterInputErrorMessage>
          )}
        </S.RegisterFormInput>
        <S.RegisterFormInput>
          <S.RegisterInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <S.RegisterInputErrorMessage>
              {errors.confirmPassword.message}
            </S.RegisterInputErrorMessage>
          )}
        </S.RegisterFormInput>
        <S.RegisterButtonWrapper>
          <Button type="submit">Register</Button>
        </S.RegisterButtonWrapper>
        <S.GoogleRegisterButton>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          >
            <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
          </GoogleOAuthProvider>
        </S.GoogleRegisterButton>
      </S.RegisterForm>
      {message && (
        <S.RegisterInputSuccessMessage>{message}</S.RegisterInputSuccessMessage>
      )}
    </S.RegisterSection>
  )
}
