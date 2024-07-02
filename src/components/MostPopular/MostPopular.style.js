import styled from "styled-components"

export const Wrapper = styled.div`
  float: right;
  gap: ${({ theme }) => theme.spacings.medium};
  margin: ${({ theme }) => theme.spacings.xlarge} auto;
  width: 35%;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: left;
  margin-right: 0;
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`
