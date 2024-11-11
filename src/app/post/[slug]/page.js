import * as S from "./page.styles"
import Flex from "@/components/Flex"
import CategoriesSideBar from "@/components/SideBar/CategoriesSideBar"
import MostPopular from "@/components/SideBar/MostPopular"
import { SideBar } from "@/components/SideBar/SideBar.style"
import Comments from "@/features/post/Comments"
import PostContent from "@/features/post/PostContent"

const getData = async (slug) => {
  const response = await fetch(`http://localhost:4000/posts/${slug}`)
  const data = await response.json()

  return data
}

export default async function Post({ params }) {
  const { slug } = params
  const { post } = await getData(slug)

  return (
    <Flex flexDirection="column">
      <S.PostHeader gap="20px">
        <Flex flexDirection="column" justifyContent="space-between" flex={1}>
          <S.Title>{post.title}</S.Title>
          <S.Text>{post.author}</S.Text>
        </Flex>
        <S.StyledImage
          src={post.image}
          alt={post.title}
          height={250}
          width={250}
        />
      </S.PostHeader>
      <Flex gap="50px" alignItems="flex-start">
        <div style={{ flex: 5 }}>
          <h1>Content</h1>
          <PostContent text={post.text} />
          <Comments />
        </div>
        <SideBar>
          <MostPopular />
          <CategoriesSideBar />
        </SideBar>
      </Flex>
    </Flex>
  )
}
