import Post from "./Post"
import * as S from "./RecentPosts.style"
import computer from "@/images/Computer.png"
import fashionMan from "@/images/Fashion_Man.png"
import kombi from "@/images/Kombi.png"
import pasta from "@/images/Pasta.png"

const posts = [
  {
    image: computer,
    date: "10-08-2023",
    category: "Travel",
    title: "A Journey Through Bohemiam Beauty: Exploring the Streets of Prague",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: fashionMan,
    date: "14-07-2023",
    category: "Fashion",
    title: "Timeless Fashion with a Modern Twist Winter Collection",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: kombi,
    date: "22-03-2023",
    category: "Food",
    title: "My Favorite Authentic Italian Pasta Dishes",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: pasta,
    date: "05-01-2023",
    category: "Food",
    title: "Navigating First Impressions: Introduce Yourself",
    link: "/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
export default function MostPopular() {
  return (
    <>
      <S.Wrapper>
        <S.Title>Recent Posts</S.Title>
        {posts.map((item, index) => (
          <Post postItem={item} key={index} />
        ))}
      </S.Wrapper>
    </>
  )
}
