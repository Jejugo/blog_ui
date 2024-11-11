"use client"

import { useState } from "react"

import * as S from "./comments.styled"
import Button from "@/components/Button"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [textAreaValue, setTextAreaValue] = useState("")

  return (
    <>
      <h1>Comments</h1>
      <div>
        <S.CommentSection alignItems="center" gap="20px">
          <S.TextArea onChange={(e) => setTextAreaValue(e.target.value)} />
          <Button
            onClick={() =>
              setComments((prevState) => [
                ...prevState,
                {
                  text: textAreaValue,
                  author: "unknown",
                },
              ])
            }
          >
            Send
          </Button>
        </S.CommentSection>

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
