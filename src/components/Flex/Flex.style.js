"use client"

import styled from "styled-components"

export const FlexStyle = styled.div`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ gap }) => gap && `gap: ${gap}`};
`
