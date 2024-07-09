"use client"

import styled from "styled-components"

export const Wrapper = styled.div`
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
`
export const Category = styled.div`
  margin: ${({ theme }) => theme.spacings.medium} auto;
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const MetaData = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  margin: 0 auto;
`

export const Author = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`

export const Date = styled.p`
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`
