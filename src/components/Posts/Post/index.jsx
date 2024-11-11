import Image from "next/image"
import { useRouter } from "next/navigation"

import * as S from "./Post.style"
import CategoryTag from "@/components/CategoryTag"
import Flex from "@/components/Flex"

export default function Post({ postItem }) {
  const router = useRouter()

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
          <S.Title onClick={() => router.push(`/post/${postItem.id}`)}>
            {postItem.title}
          </S.Title>
          <S.Description>{postItem.description}</S.Description>
        </div>
        <S.StyledLink href={`/post/${postItem.id}`}>Read more</S.StyledLink>
      </Flex>
    </S.Wrapper>
  )
}
