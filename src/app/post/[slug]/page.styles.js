"use client"

import Image from "next/image"
import styled from "styled-components"

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

export const PostTitle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
