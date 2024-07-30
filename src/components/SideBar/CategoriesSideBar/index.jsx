import * as S from "./CategoriesSideBar.style"
import { categories } from "../../Categories"

export default function CategoriesSideBar() {
  return (
    <S.Wrapper>
      <S.Text>Discover by Topic</S.Text>
      <S.Title>Categories</S.Title>
      <S.Categories>
        {categories.map((category, index) => (
          <S.CategoriesSideBarButton key={index} name={category.name}>
            {category.name}
          </S.CategoriesSideBarButton>
        ))}
      </S.Categories>
    </S.Wrapper>
  )
}
