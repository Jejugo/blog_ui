"use client"

import styled from "styled-components"

export const Wrapper = styled.div`
  float: right;
  gap: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.small} auto;
  width: 30%;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  margin-right: 0;
  margin: ${({ theme }) => theme.spacings.medium} auto;
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
