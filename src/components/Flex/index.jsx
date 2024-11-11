import * as S from "./Flex.style"

export default function Flex({ children, className, ...styles }) {
  return (
    <S.FlexStyle className={className} style={{ ...styles }}>
      {children}
    </S.FlexStyle>
  )
}
