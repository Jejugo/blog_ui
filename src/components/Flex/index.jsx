import * as S from "./Flex.style"

export default function Flex({
  children,
  justifyContent,
  alignItems,
  gap,
  direction,
  ...styles
}) {
  return (
    <S.FlexStyle
      justifyContent={justifyContent}
      alignItems={alignItems}
      gap={gap}
      direction={direction}
      style={{ ...styles }}
    >
      {children}
    </S.FlexStyle>
  )
}
