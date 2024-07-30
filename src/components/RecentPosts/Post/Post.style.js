"use client"

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: left;
`

export const StyledImage = styled(Image)`
  width: 250px;
  height: 250px;
`

export const MetaData = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  align-items: center;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: left;
`

export const Wrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacings.small} auto;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: underline;
  text-underline-offset: 7px;
`
