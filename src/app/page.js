"use client"

import Categories from "@/components/Categories"
import FirstBanner from "@/components/FirstBanner"
import Flex from "@/components/Flex"
import RecentPosts from "@/components/RecentPosts"
import CategoriesSideBar from "@/components/SideBar/CategoriesSideBar"
import MostPopular from "@/components/SideBar/MostPopular"
import * as S from "@/components/SideBar/SideBar.style"

export default function Home() {
  return (
    <>
      <FirstBanner />
      <Categories />
      <Flex gap={"20px"} alignItems={"flex-start"}>
        <RecentPosts />
        <S.SideBar>
          <MostPopular />
          <CategoriesSideBar />
        </S.SideBar>
      </Flex>
    </>
  )
}
