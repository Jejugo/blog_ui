import Link from "next/link"
import styled from "styled-components"

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Icons = styled.div`
  display: flex;
  gap: 10px;
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`

export const LinkIcons = styled(Link)`
  width: 20px;
  height: 20px;
  position: relative;
`

export const LinkPages = styled(Link)`
  color: #000000;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
