import * as S from "./PopularItem.style"
import Tag from "@/components/Tag"

export default function PopularItem({ item }) {
  return (
    <S.Wrapper>
      <Tag category={item.category} link="http://google.com.br" />
      <S.Title>{item.title}</S.Title>
      <S.MetaData>
        <S.AuthorNDate>
          {item.author} - {item.date}
        </S.AuthorNDate>
      </S.MetaData>
    </S.Wrapper>
  )
}
