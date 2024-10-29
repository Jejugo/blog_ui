"use client"

import Link from "next/link"
import styled from "styled-components"

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ theme, category }) =>
    theme.categories[category.toLowerCase()]};
  width: 74px;
  height: 24px;
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  margin: auto;
`

export const ContainerButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, name }) =>
    theme.categories[name.toLowerCase()]};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ theme }) => theme.buttonSize.xlarge};

  &:hover {
    background-color: ${({ theme }) =>
      theme.button.primary.backgroundColorHover};
    color: ${({ theme }) => theme.button.primary.colorHover};
    transition: 0.5s ease;
  }
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
