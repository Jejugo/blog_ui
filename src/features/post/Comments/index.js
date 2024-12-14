"use client"

import { useState } from "react"

import * as S from "./comments.styled"
import Button from "@/components/Button"
import { useAuth } from "@/context/AuthContext"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [textAreaValue, setTextAreaValue] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const { isAuthenticated, credentials } = useAuth()

  const handleSubmit = async () => {
    if (!isAuthenticated) {
      setErrorMessage("You need to be logged in in order to post a comment.")
      return
    }

    setErrorMessage(null)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          textAreaValue,
        }),
      }
    )

    const data = await response.json()
    console.log("data: ", data)

    setComments((prevState) => [
      ...prevState,
      {
        text: textAreaValue,
        author: username,
      },
    ])
  }

  return (
    <>
      <h1>Comments</h1>
      <div>
        <S.CommentSection alignItems="center" gap="20px">
          <S.TextArea onChange={(e) => setTextAreaValue(e.target.value)} />
          <Button onClick={handleSubmit}>Send</Button>
        </S.CommentSection>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>

        {comments.map((comment, index) => {
          return (
            <div key={index} style={{ textAlign: "left" }}>
              <p>{comment.text}</p>
              <p>{comment.author}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
