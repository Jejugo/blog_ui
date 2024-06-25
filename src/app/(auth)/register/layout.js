"use client"

import React from "react"

import * as S from "./styles/layout.styles"
import PrivateRoute from "@/components/PrivateRoute"

export default function layout({ children }) {
  return (
    <PrivateRoute>
      <S.LayoutWrapper>
        <S.RegisterLayout>{children}</S.RegisterLayout>
      </S.LayoutWrapper>
    </PrivateRoute>
  )
}
