import Link from "next/link"
import styled from "styled-components"

export const FooterWrapper = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.secondary};
`
export const Description = styled.div``

export const Blog = styled.div``

export const HeaderWrapper = styled.div`
  display: flex;
`

export const Image = styled.div``

export const Title = styled.div``

export const SocialMedia = styled(Link)`
  display: flex;
  width: 20px;
  height: 20px;
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  margin: 0 auto;
  padding: 0 20px;
`

export const LinkTitle = styled.div``

export const LinkPages = styled(Link)`
  display: flex;
`

export const BlogLinks = styled.div``

export const CategorieLinks = styled.div``

export const SocialLinks = styled.div``

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`

export const Icons = styled(Link)``
