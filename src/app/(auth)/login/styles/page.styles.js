import styled from "styled-components"

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 200px);
`

export const LoginSection = styled.section`
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const LoginFormField = styled.div`
  height: 70px;
`

export const LoginTitle = styled.h1`
  text-align: center;
  padding: 20px 0px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.xsmall};
  padding: 0px 10px;
  box-sizing: border-box;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.4),
    0 1px 2px 0 rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
    box-shadow:
      0 1px 2px 0 rgba(0, 0, 0, 0.8),
      0 1px 2px 0 rgba(0, 0, 0, 0.8);
  }
`

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const GoogleLoginButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`

export const LoginInputErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: ${({ theme }) => theme.spacings.small} 0px;
`
