import styled from "styled-components"

export const LayoutWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 95vh;
`

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  align-items: center;
  padding: 0px 50px;
  width: 350px;
  height: 50%;
  margin: 0 auto;
  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
`
