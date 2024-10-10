"use client"

import debounce from "lodash.debounce"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Flex from "@/components/Flex"
import Posts from "@/components/Posts"
import CategoriesSideBar from "@/components/SideBar/CategoriesSideBar"
import MostPopular from "@/components/SideBar/MostPopular"
import * as S from "@/components/SideBar/SideBar.style"
import FeaturedPost from "@/features/categories/FeaturedPost"
;[
  {
    cat: "car",
    link: "/categories?cat= car",
  },
]

const StyledCategory = styled.div`
  text-align: left;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.large};
`

// www.blog.com.br/categories?cat=technology --> { cat, page } = searchParams
// TODO:
// - Incluir requisição para o endpoint
// - Ajustar o useEffect
// - Passar as informações para o component "Posts"
export default function Categories({ searchParams }) {
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [postsData, setPostsData] = useState([])
  // const [lastPage, setLastPage] = useState(0)

  useEffect(() => {
    const getCategory = async (page) => {
      setIsLoading(true)
      setTimeout(async () => {
        try {
          console.log("params", searchParams)
          const data = await fetch(
            `http://localhost:4000/posts?category=${searchParams.cat}&page=${page}&limit=10`
          )
          const { posts: requestPosts } = await data.json()
          console.log(requestPosts)

          setPostsData(requestPosts)
        } catch (err) {
          console.log("error:", err)
        } finally {
          setIsLoading(false)
          if (requestPosts.length > 10) {
            setIsLastPage(true)
          }
        }
      }, 2000)
    }

    getCategory(page)
  }, [page, searchParams])

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      // verificar se é a ultima pagina, se sim retorna - backend
      if (isLastPage) {
        return
      } else if (!isLoading) setPage((prevState) => prevState + 1)
      // faz a request para a proxima página,
      // ter um indicador de loading
    }
  }, 500)

  console.log("page -> ", page)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [isLastPage, isLoading, handleScroll])

  // const handlePageChange = (direction) => {
  //   if (direction === "previous") {
  //     setPage((prevState) => prevState - 1)
  //   } else {
  //     setPage((prevState) => prevState + 1)
  //   }
  // }
  //{cat: 'car', page: '2'}
  // console.log(searchParams)
  return (
    <>
      <StyledCategory>Categoria: {searchParams.cat}</StyledCategory>
      <Flex gap="50px" alignItems="flex-start">
        <div style={{ flex: 5 }}>
          <FeaturedPost />
          <Posts posts={postsData} loading={isLoading} />
        </div>
        <S.SideBar>
          <MostPopular />
          <CategoriesSideBar />
        </S.SideBar>
      </Flex>
    </>
  )
}
