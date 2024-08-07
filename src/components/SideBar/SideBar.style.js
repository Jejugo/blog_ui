"use client"

import styled from "styled-components"

import breakpoint from "@/styles/breakpoints"

export const SideBar = styled.div`
  flex: 2;

  @media screen and (width < ${breakpoint.laptop}) {
    display: none;
  }
`
