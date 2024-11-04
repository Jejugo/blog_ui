import Post from "./Post"
import * as S from "./Posts.style.js"
import Flex from "../Flex"
import { commonStyles } from "@/styles/theme"

export default function Posts({ posts = [], loading }) {
  return (
    <S.Wrapper>
      <Flex direction="column" gap={commonStyles.spacings.large}>
        {posts.map((item, index) => (
          <Post postItem={item} key={index} />
        ))}
      </Flex>
      {loading && <p>Loading</p>}
    </S.Wrapper>
  )
}
