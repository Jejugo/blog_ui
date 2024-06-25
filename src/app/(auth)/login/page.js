"use client"

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { useState } from "react"
import { useForm } from "react-hook-form"

import * as S from "./styles/page.styles"
import Button from "@/components/Button"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [message, setMessage] = useState("")

  const onSubmit = async (data) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )

    const result = await res.json()

    if (res.ok) {
      setMessage("Login successful!")
      localStorage.setItem("token", result.token)

      window.location.href = "/"
    } else {
      setMessage(result.message || "Login failed")
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
        window.location.href = "/"
      }

      if (result.error.code === "ER_DUP_ENTRY") {
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

  return (
    <S.LoginSection>
      <S.LoginTitle>Login</S.LoginTitle>

      <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
        <S.LoginFormField>
          <S.LoginInput
            type="text"
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
          {errors.email && <p>{errors.email.message}</p>}
        </S.LoginFormField>
        <S.LoginFormField>
          <S.LoginInput
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </S.LoginFormField>
        <S.LoginButtonWrapper>
          <Button type="submit">Login</Button>
        </S.LoginButtonWrapper>
        <S.GoogleLoginButton>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
          >
            <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
          </GoogleOAuthProvider>
        </S.GoogleLoginButton>
      </S.LoginForm>
      {message && <p>{message}</p>}
    </S.LoginSection>
  )
}
