import * as S from "./Tag.Style"

export default function Tag({ category, link }) {
  return (
    <S.Tag category={category}>
      <S.StyledLink href={link}>{category}</S.StyledLink>
    </S.Tag>
  )
}
