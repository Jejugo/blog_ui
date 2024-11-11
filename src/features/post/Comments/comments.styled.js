import styled from "styled-components"

import Flex from "@/components/Flex"
import breakpoint from "@/styles/breakpoints"

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  borde-radius: ${({ theme }) => theme.radius.small};
  resize: none;
  padding: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const CommentSection = styled(Flex)`
  @media screen and (width < ${breakpoint.mobile}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
