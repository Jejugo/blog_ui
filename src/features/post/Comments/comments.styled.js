import styled from "styled-components"

export const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  borde-radius: ${({ theme }) => theme.radius.small};
  resize: none;
  padding: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
`
