"use client"

import styled from "styled-components"

export const Wrapper = styled.div`
  gap: ${({ theme }) => theme.spacings.small};
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.medium} auto;
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacings.large};
`

export const CategoriesSideBarButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, name }) =>
    theme.categories[name.toLowerCase()]};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.small};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ theme }) => theme.buttonSize.small};

  &:hover {
    background-color: ${({ theme }) =>
      theme.button.primary.backgroundColorHover};
    color: ${({ theme }) => theme.button.primary.colorHover};
    transition: 0.5s ease;
  }
`
