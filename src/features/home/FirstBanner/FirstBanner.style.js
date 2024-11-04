"use client"
import Image from "next/image"
import styled from "styled-components"

import breakpoint from "@/styles/breakpoints"

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin: ${({ theme }) => theme.spacings.xxlarge} auto;
  text-align: left;

  @media screen and (max-width: ${breakpoint.laptopL}) {
    font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }

  @media screen and (max-width: ${breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
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
  color: ${({ theme }) => theme.colors.primary};
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

export const StyledImage = styled(Image)`
  object-fit: cover;

  @media screen and (max-width: ${breakpoint.laptop}) {
    display: none;
  }
`
