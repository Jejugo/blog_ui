import styled from "styled-components"

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  text-align: justify;
  margin: ${({ theme }) => theme.spacings.xxlarge} auto;
`

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.small} auto;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  margin: ${({ theme }) => theme.spacings.medium} auto;
`

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.xlarge};
  margin-botton: ${({ theme }) => theme.spacings.xlarge};
`

export const BannerSection = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
`

export const BannerButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: ${({ theme }) => theme.spacings.large} auto;

  &:hover {
    background-color: ${({ theme }) =>
      theme.button.primary.backgroundColorHover};
    color: ${({ theme }) => theme.button.primary.colorHover};
    transition: 0.5s ease;
  }
`
