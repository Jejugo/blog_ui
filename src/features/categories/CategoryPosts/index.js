import React from "react"

import useCategoryPosts from "./hooks/useCategoryPosts"
import Posts from "@/components/Posts"

export default function CategoryPosts({ searchParams }) {
  const { postsData, isLoading } = useCategoryPosts({
    searchParams,
  })

  return <Posts posts={postsData} loading={isLoading} />
}
