"use client"

import styled from "styled-components"

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Page = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  margin: ${({ theme }) => theme.spacings.small} auto;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Wrapper = styled.div`
  flex: 5;
  gap: ${({ theme }) => theme.spacings.small};
  margin: ${({ theme }) => theme.spacings.small} auto;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.spacings.small} auto;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.medium};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
