"use client"

import styled from "styled-components"

export const Button = styled.button`
  width: 100px;
  color: ${({ theme }) => theme.button.primary.color};
  border: none;
  height: 30px;
  cursor: pointer;
  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return `
          background-color: ${theme.button.primary.backgroundColor};
          &:hover {
            background-color: ${theme.button.primary.backgroundColorHover};
            color: ${theme.button.primary.colorHover};
          } 
        `
      default:
        return ``
    }
  }}
`
