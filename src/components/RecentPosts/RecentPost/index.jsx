import Image from "next/image"

import * as S from "./Post.style"
import Flex from "@/components/Flex"
import Tag from "@/components/Tag"

export default function Post({ postItem }) {
  return (
    <S.Wrapper>
      <Image
        src={postItem.image}
        alt={postItem.title}
        height={250}
        width={250}
      />
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <S.MetaData>
          <S.Date>{postItem.date}</S.Date>
          <Tag category={postItem.category} link="http://google.com.br" />
        </S.MetaData>
        <div>
          <S.Title>{postItem.title}</S.Title>
          <S.Description>{postItem.description}</S.Description>
        </div>
        <S.StyledLink href={postItem.link}>Read more</S.StyledLink>
      </Flex>
    </S.Wrapper>
  )
}
