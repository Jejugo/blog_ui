"use client"

import { useState, useRef } from "react"

import * as S from "./page.styles.js"
import Flex from "@/components/Flex"
import Editor from "@/features/write/Editor"

const Write = () => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [catSlug, setCatSlug] = useState("1")
  const editorRef = useRef()

  const handleSubmit = async () => {
    if (!title || !value) {
      alert("Insira todos os dados")
      return
    }

    await fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content: value,
        catSlug,
      }),
    })
  }

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center">
        <S.PostTitle
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título"
        />
        <S.PublishButton onClick={handleSubmit}>Publish</S.PublishButton>
      </Flex>

      <Editor editorRef={editorRef} value={value} setValue={setValue} />
      <S.Select onChange={(e) => setCatSlug(e.target.value)} value={catSlug}>
        <option value="placeholder" disabled>
          Pick a category
        </option>
        <option value="1">Front End</option>
        <option value="2">Back End</option>
        <option value="3">React</option>
        <option value="4">NodeJs</option>
        <option value="5">Devops</option>
        <option value="6">Mobile</option>
      </S.Select>
    </Flex>
  )
}

export default Write
