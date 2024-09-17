import React, { useEffect, useState } from "react"

import Post from "./Post"
import * as S from "./RecentPosts.style"

export default function RecentPosts() {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])
  const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    const getPage = async (page) => {
      try {
        const data = await fetch(
          `http://localhost:4000/posts/recents?page=${page}`
        )
        const { posts: requestPosts, lastPage: requestLastPage } =
          await data.json()

        setPosts(requestPosts)
        setLastPage(requestLastPage)
      } catch (err) {
        console.log("error:", err)
      }
    }

    getPage(page)
  }, [page])

  const handlePageChange = (direction) => {
    if (direction === "previous") {
      setPage((prevState) => prevState - 1)
    } else {
      setPage((prevState) => prevState + 1)
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Recent Posts</S.Title>
      {posts.map((item, index) => (
        <Post postItem={item} key={index} />
      ))}
      <S.Buttons>
        <S.Button
          disabled={page === 1}
          onClick={() => handlePageChange("previous")}
        >
          Prev
        </S.Button>
        <S.Page>
          {page} / {lastPage}
        </S.Page>
        <S.Button
          disabled={page === lastPage}
          onClick={() => handlePageChange("next")}
        >
          Next
        </S.Button>
      </S.Buttons>
    </S.Wrapper>
  )
}
