import * as S from "./Post.style"
import Flex from "@/components/Flex"
import Tag from "@/components/Tag"

export default function Post({ postItem }) {
  return (
    <S.Wrapper>
      <S.StyledImage src={postItem.image} alt={postItem.title} />
      <Flex
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <S.MetaData>
          <S.Date>{postItem.date}</S.Date>
          <Tag category={postItem.category} link="http://google.com.br" />
        </S.MetaData>
        <S.Title>{postItem.title}</S.Title>
        <S.Description>{postItem.description}</S.Description>
        <S.StyledLink href={postItem.link}>Read more</S.StyledLink>
      </Flex>
    </S.Wrapper>
  )
}
