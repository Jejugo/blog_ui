"use client"

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

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin: auto;
`
