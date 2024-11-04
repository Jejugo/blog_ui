import debounce from "lodash.debounce"
import { useState, useEffect, useCallback } from "react"

export default function useCategoryPosts({ searchParams }) {
  const [page, setPage] = useState(1)
  const [isLastPage, setIsLastPage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [postsData, setPostsData] = useState([])

  useEffect(() => {
    const getCategory = async (page) => {
      setIsLoading(true)
      setTimeout(async () => {
        try {
          const data = await fetch(
            `http://localhost:4000/posts?category=${searchParams.cat}&page=${page}&limit=10`
          )
          const { posts: requestPosts } = await data.json()
          if (requestPosts.length > 10) {
            setIsLastPage(true)
          }
          setPostsData((prevState) => [...prevState, ...requestPosts])
        } catch (err) {
          console.log("error:", err)
        } finally {
          setIsLoading(false)
        }
      }, 2000)
    }

    getCategory(page)
  }, [page, searchParams])

  const handleScroll = useCallback(
    debounce(
      () => {
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
      },
      { leading: true }
    ),
    [isLoading, isLastPage]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isLastPage, isLoading, handleScroll])

  return {
    postsData,
    isLoading,
  }
}
