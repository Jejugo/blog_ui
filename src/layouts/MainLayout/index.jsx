import React from "react"
import styled from "styled-components"

const MainLayoutStyle = styled.section`
  width: 60vw;
  //display: flex;
  margin: 0 auto;
  text-align: center;
`

export default function MainLayout({ children }) {
  return <MainLayoutStyle>{children}</MainLayoutStyle>
}
