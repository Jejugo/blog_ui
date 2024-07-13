import * as S from "./Categories.style"

export const categories = [
  "Fashion",
  "Food",
  "Coding",
  "Style",
  "Travel",
  "Culture",
]

export default function Categories() {
  return (
    <>
      <S.Title>Popular Categories</S.Title>
      <S.Containter>
        {categories.map((category, index) => (
          <S.ContainerButton key={index}>{category}</S.ContainerButton>
        ))}
      </S.Containter>
    </>
  )
}
