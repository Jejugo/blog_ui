import * as S from "./PopularItem.style"

export default function PopularItem({ item }) {
  return (
    <S.Wrapper>
      <S.Category>{item.category}</S.Category>
      <S.Title>{item.title}</S.Title>
      <S.MetaData>
        <S.Author>{item.author}</S.Author>
        <S.Date>{item.date}</S.Date>
      </S.MetaData>
    </S.Wrapper>
  )
}
