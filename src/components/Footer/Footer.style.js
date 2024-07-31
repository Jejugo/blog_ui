import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: flex;
  bottom: 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 100px;
  padding-right: 100px;
  gap: 100px;
  margin-top: 100px;
  padding-bottom: 20px;
`
export const Description = styled.div``

export const Blog = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const StyledImage = styled(Image)`
  border-radius: 50%;
`

export const Title = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const SocialMedia = styled(Link)`
  display: flex;
  width: 20px;
  height: 20px;
`

export const Links = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
`

export const LinkTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const LinkPages = styled(Link)`
  display: flex;
`

export const BlogLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CategorieLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`

export const Icons = styled(Link)``
