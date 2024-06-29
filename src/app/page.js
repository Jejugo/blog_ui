"use client"

import { Inter } from "next/font/google"

import MainLayout from "../layouts/MainLayout/index"
import FirstBanner from "@/components/FirstBanner"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <MainLayout className={inter.className}>
      {/* <h1> Hey lama dev here! Discover my stories and creative ideas </h1> */}
      <FirstBanner />
    </MainLayout>
  )
}
