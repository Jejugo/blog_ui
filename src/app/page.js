"use client"

import Categories from "@/components/Categories"
import FirstBanner from "@/components/FirstBanner"
import CategoriesSideBar from "@/components/SideBar/CategoriesSideBar"
import MostPopular from "@/components/SideBar/MostPopular"
import * as S from "@/components/SideBar/SideBar.style"

export default function Home() {
  return (
    <>
      <FirstBanner />
      <Categories />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 5 }}></div>
        <S.SideBar>
          <MostPopular />
          <CategoriesSideBar />
        </S.SideBar>
      </div>
    </>
  )
}
