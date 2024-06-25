"use client"

import styled from "styled-components"

import Navbar from "../components/Navbar"
import FirstBanner from "@/components/FirstBanner"

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default function Home() {
  return (
    <Root>
      <Navbar />
      <FirstBanner />
    </Root>
  )
}
