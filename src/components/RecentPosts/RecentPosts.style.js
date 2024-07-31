"use client"

import styled from "styled-components"

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Wrapper = styled.div`
  flex: 5;
  gap: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.small} auto;
`
