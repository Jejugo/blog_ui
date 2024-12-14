import { PostContentStyled } from "./PostContent.styles"

export default function PostContent({ text = "" }) {
  return (
    <PostContentStyled
      dangerouslySetInnerHTML={{ __html: text }}
      style={{ textAlign: "left" }}
    />
  )
}
