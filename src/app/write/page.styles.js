import styled from "styled-components"

export const PostTitle = styled.input`
  font-size: 50px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 50px 0px;

  &::placeholder {
    color: grey;
  }
`

export const Select = styled.select`
  margin: 50px 0px;
  padding: 10px 10px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.primary};
`

export const PublishButton = styled.button`
  top: 0px;
  right: 0px;
  padding: 10px 20px;
  border: none;
  background-color: #1a8917;
  color: white;
  cursor: pointer;
  border-radius: 20px;
`
