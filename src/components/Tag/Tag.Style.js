"use client"

import styled from "styled-components"

const categoriesColor = {
  travel: "#2efa0f",
  culture: "#2855f7",
  food: "#fc0560",
  fashion: "#ac0ffa",
}

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.medium};
  background-color: ${({ category }) =>
    categoriesColor[category.toLowerCase()]};
  width: 74px;
  height: 24px;
`

export const StyledLink = styled.a`
  color: white;
  margin: auto;
`
