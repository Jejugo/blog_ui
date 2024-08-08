import styled from "styled-components"

export const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 100px;
  padding-right: 100px;
  margin-top: 100px;
  padding-bottom: 20px;
`

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const LinkTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
