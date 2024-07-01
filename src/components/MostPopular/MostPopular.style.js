import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  float: right;
  gap: ${({ theme }) => theme.spacings.medium};
  margin: ${({ theme }) => theme.spacings.xlarge} auto;
  width: 35%;
`

export const Text = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.small};
  align-items: right;
  margin-right: 0;
`

export const Title = styled.div`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: justify;
  margin: ${({ theme }) => theme.spacings.xxlarge} auto;
`
