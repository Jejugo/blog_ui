import * as S from "./Flex.style"

export default function Flex({
  children,
  justifyContent,
  alignItems,
  gap,
  direction,
  className,
  ...styles
}) {
  return (
    <S.FlexStyle
      className={className}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $gap={gap}
      $direction={direction}
      style={{ ...styles }}
    >
      {children}
    </S.FlexStyle>
  )
}
