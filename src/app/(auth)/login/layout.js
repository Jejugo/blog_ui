"use client"

import React from "react"

import * as S from "./styles/layout.styles"

export default function layout({ children }) {
  return (
    <S.LayoutWrapper>
      <S.LoginLayout>{children}</S.LoginLayout>
    </S.LayoutWrapper>
  )
}
