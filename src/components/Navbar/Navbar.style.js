import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import Link from "next/link"
import styled from "styled-components"

import breakpoint from "@/styles/breakpoints"

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.screenWidth};
  height: 60px;
  margin: 0 auto;
`

export const Icons = styled.div`
  display: flex;
  gap: 10px;
`

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.large};

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const LinkIcons = styled(Link)`
  width: 20px;
  height: 20px;
  position: relative;
`

export const MenuHamburguer = styled.div`
  @media screen and (min-width: ${breakpoint.tablet}) {
    display: none;
  }
`

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const MenuIcon = styled(MenuRoundedIcon)`
  color: ${({ theme }) => theme.colors.primary};
`

export const MenuOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  height: calc(100% - 60px);
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`

export const MenuItem = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
`

export const LinkPages = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media screen and (max-width: ${breakpoint.tablet}) {
    display: none;
  }
`
