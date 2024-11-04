import Image from "next/image"

import * as S from "./Post.style"
import CategoryTag from "@/components/CategoryTag"
import Flex from "@/components/Flex"

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
          <CategoryTag category={postItem.category} />
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
