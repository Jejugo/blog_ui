import * as S from "./PopularItem.style"
import Tag from "@/components/Tag"

export default function PopularItem({ item }) {
  return (
    <S.Wrapper>
      <Tag
        text={item.category}
        category={item.category}
        link="http://google.com.br"
      />
      <S.Title>{item.title}</S.Title>
      <S.MetaData>
        <S.Author>{item.author}</S.Author>
        <S.Date>{item.date}</S.Date>
      </S.MetaData>
    </S.Wrapper>
  )
}
