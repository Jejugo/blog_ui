"use client"

import { useState } from "react"

import { TextArea } from "./comments.styled"
import Button from "@/components/Button"
import Flex from "@/components/Flex"

export default function Comments() {
  const [comments, setComments] = useState([])
  const [textAreaValue, setTextAreaValue] = useState("")

  return (
    <>
      <h1>Comments</h1>
      <div>
        <Flex alignItems="center" gap="20px">
          <TextArea onChange={(e) => setTextAreaValue(e.target.value)} />
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
        </Flex>

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
