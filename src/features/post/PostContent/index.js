export default function PostContent({ text }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: text }}
      style={{ textAlign: "left" }}
    />
  )
}
