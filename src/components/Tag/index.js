import * as S from "./Tag.Style"

export default function Tag({ text, category, link }) {
  return (
    <S.Tag category={category}>
      <S.StyledLink href={link}>{text}</S.StyledLink>
    </S.Tag>
  )
}
