import * as S from "./Button.styles"

export default function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  disabled = false,
}) {
  return (
    <S.Button
      type={type}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </S.Button>
  )
}
