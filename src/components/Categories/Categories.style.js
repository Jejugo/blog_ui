import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  aign-items: center;
`
export const Containter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.medium};
  margin: ${({ theme }) => theme.spacings.xlarge} auto;
`

export const Title = styled.h2`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: justify;
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`
export const ContainerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, name }) =>
    theme.categories[name.toLowerCase()]};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ theme }) => theme.buttonSize.xlarge};

  &:hover {
    background-color: ${({ theme }) =>
      theme.button.primary.backgroundColorHover};
    color: ${({ theme }) => theme.button.primary.colorHover};
    transition: 0.5s ease;
  }
`
