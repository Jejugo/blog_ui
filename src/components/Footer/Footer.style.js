import styled from "styled-components"

import breakpoint from "@/styles/breakpoints"

export const FooterWrapper = styled.footer`
  bottom: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0px 5% 20px 5%;
  margin-top: 100px;

  @media screen and (width < ${breakpoint.tablet}) {
    text-align: center;
  }
`

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const LinkTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const FooterLinks = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (width < ${breakpoint.tablet}) {
    display: none;
  }
`

export const FooterTitle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (width < ${breakpoint.tablet}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const FooterMediaIcons = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (width < ${breakpoint.tablet}) {
    justify-content: center;
  }
`
