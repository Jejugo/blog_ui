import * as S from "./Flex.style"

export default function Flex({
  children,
  justifyContent,
  alignItems,
  gap,
  direction,
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
