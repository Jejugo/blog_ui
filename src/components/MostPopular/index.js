import * as S from "./MostPopular.style"
import PopularItem from "./PopularItem"

export const mostPopular = [
  {
    category: "Travel",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    author: "Joseph Owen",
    date: "10.08.2023",
  },
  {
    category: "Culture",
    title: "Navigating First Impressions: Introduce Yourself",
    author: "Rosa Agiar",
    date: "14.07.2023",
  },
  {
    category: "Food",
    title: "My Favorite Authentic Italian Pasta Dishes",
    author: "Jayden Little",
    date: "22.03.2023",
  },
  {
    category: "Fashion",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    author: "Kate Woods",
    date: "05.01.2023",
  },
]

export default function MostPopular() {
  return (
    <S.Wrapper>
      <S.Text>What&apos;s hot</S.Text>
      <S.Title>Most Popular</S.Title>
      {mostPopular.map((item, index) => (
        <PopularItem item={item} key={index} />
      ))}
    </S.Wrapper>
  )
}
