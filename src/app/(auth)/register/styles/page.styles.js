import styled from "styled-components"

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 200px);
`

export const RegisterSection = styled.section`
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const RegisterFormInput = styled.div`
  min-height: 65px;
`

export const RegisterTitle = styled.h1`
  text-align: center;
  padding: 20px 0px;
  font-size: 30px;
`

export const RegisterInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
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

export const RegisterInputErrorMessage = styled.p`
  margin: 0;
  color: red;
  font-size: 14px;
  margin: 5px 0px;
`

export const RegisterInputSuccessMessage = styled.p`
  margin: 0;
  color: green;
  font-size: 14px;
  text-align: center;
  margin: 5px 0px;
`

export const RegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const GoogleRegisterButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
