"use client"

import { useState, useEffect } from "react"

import * as S from "./comments.styled"
import Button from "@/components/Button"
import { useAuth } from "@/context/AuthContext"

export default function Comments({ postId }) {
  const [comments, setComments] = useState([])
  const [textAreaValue, setTextAreaValue] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const { isAuthenticated } = useAuth()

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
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          content: textAreaValue,
          postId,
        }),
      }
    )

    const data = await response.json()

    setComments((prevState) => [
      ...prevState,
      {
        text: textAreaValue,
        author: data.author,
      },
    ])
  }

  useEffect(() => {
    const getInitialComments = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/comments/${postId}`
      )

      const comments = await data.json()

      console.log("comments: ", comments)

      setComments(comments)
    }

    getInitialComments()
  }, [])

  return (
    <>
      <h1>Comments</h1>
      <div>
        <S.CommentSection alignItems="center" gap="20px">
          <S.TextArea onChange={(e) => setTextAreaValue(e.target.value)} />
          <Button onClick={handleSubmit}>Send</Button>
        </S.CommentSection>
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>

        {comments?.map((comment, index) => {
          return (
            <div key={index} style={{ textAlign: "left" }}>
              <p>{comment.author}</p>
              <p>{comment.text}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
