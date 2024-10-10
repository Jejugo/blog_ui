"use client"

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
  margin: 0;
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
  margin: 0;
`

export const Wrapper = styled.div`
  display: flex;
  max-height: 250px;
  width: 90%;
  gap: ${({ theme }) => theme.spacings.small};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: underline;
  text-underline-offset: 7px;
`
