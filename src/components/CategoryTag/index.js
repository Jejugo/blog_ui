import * as S from "./CategoryTag.Style"

export default function CategoryTag({ category, type = "tag", icon = null }) {
  if (type === "button")
    return (
      <S.CategoriesSideBarButton name={category}>
        {category}
      </S.CategoriesSideBarButton>
    )

  if (type === "largeButton")
    return (
      <S.ContainerButton
        name={category}
        href={`/categories?cat=${category.toLowerCase()}`}
      >
        {icon} {category}
      </S.ContainerButton>
    )

  if (type === "tag")
    return (
      <S.Tag category={category}>
        <S.StyledLink href={`/categories?cat=${category.toLowerCase()}`}>
          {category}
        </S.StyledLink>
      </S.Tag>
    )
}
