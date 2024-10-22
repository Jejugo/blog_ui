"use client"

import styled from "styled-components"

import Flex from "@/components/Flex"
import CategoriesSideBar from "@/components/SideBar/CategoriesSideBar"
import MostPopular from "@/components/SideBar/MostPopular"
import * as S from "@/components/SideBar/SideBar.style"
import CategoryPosts from "@/features/categories/CategoryPosts"
import FeaturedPost from "@/features/categories/FeaturedPost"

const StyledCategory = styled.div`
  text-align: left;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.large};
`

// www.blog.com.br/categories?cat=technology --> { cat, page } = searchParams
export default function Categories({ searchParams }) {
  return (
    <>
      <StyledCategory>Categoria: {searchParams.cat}</StyledCategory>
      <Flex gap="50px" alignItems="flex-start">
        <div style={{ flex: 5 }}>
          <FeaturedPost />
          <CategoryPosts searchParams={searchParams} />
        </div>
        <S.SideBar>
          <MostPopular />
          <CategoriesSideBar />
        </S.SideBar>
      </Flex>
    </>
  )
}
