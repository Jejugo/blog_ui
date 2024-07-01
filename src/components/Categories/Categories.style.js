import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  aign-items: center;
`
export const Containter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  background-color: ${({ theme }) =>
    theme.colors.secondaryBackground}; //rgb(216, 216, 216);
  color: ${({ theme }) => theme.colors.text}; //rgb(51, 51, 51);
  padding: ${({ theme }) => theme.spacings.medium}
    ${({ theme }) => theme.spacings.large};
  border-radius: ${({ theme }) => theme.radius.xsmall};
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.5s ease;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  width: ${({ theme }) => theme.buttonSize.large};

  &:hover {
    background-color: ${({ theme }) =>
      theme.button.primary.backgroundColorHover};
    color: ${({ theme }) => theme.button.primary.colorHover};
    transition: 0.5s ease;
  }
`
