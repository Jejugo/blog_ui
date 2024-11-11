"use client"

import Image from "next/image"
import styled from "styled-components"

import Flex from "@/components/Flex"
import breakpoint from "@/styles/breakpoints"

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: left;
  margin: 0;
  line-height: 2;
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: left;
`

export const StyledImage = styled(Image)`
  flex: 1;
  border-radius: ${({ theme }) => theme.radius.small};
`

export const PostHeader = styled(Flex)`
  @media screen and (width < ${breakpoint.mobile}) {
    flex-wrap: wrap;
  }
`
