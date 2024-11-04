import * as S from "./CategoriesSideBar.style"
import { categories } from "../../Categories"
import CategoryTag from "@/components/CategoryTag"

export default function CategoriesSideBar() {
  return (
    <S.Wrapper>
      <S.Text>Discover by Topic</S.Text>
      <S.Title>Categories</S.Title>
      <S.Categories>
        {categories.map((category, index) => (
          <CategoryTag key={index} category={category.name} type="button">
            {category.name}
          </CategoryTag>
        ))}
      </S.Categories>
    </S.Wrapper>
  )
}
