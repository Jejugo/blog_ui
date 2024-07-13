"use client"

import Categories from "@/components/Categories"
import FirstBanner from "@/components/FirstBanner"
import MostPopular from "@/components/MostPopular"

export default function Home() {
  return (
    <>
      <FirstBanner />
      <MostPopular />
      <Categories />
    </>
  )
}
