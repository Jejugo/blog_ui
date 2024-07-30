import * as S from "./Flex.style"

export default function Flex({
  children,
  justifyContent = "center",
  alignItems = "center",
  gap = 0,
  direction = "row",
}) {
  return (
    <S.FlexStyle
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      direction={direction}
    >
      {children}
    </S.FlexStyle>
  )
}
