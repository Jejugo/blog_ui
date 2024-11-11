"use client"

import Link from "next/link"
import styled from "styled-components"

import breakpoint from "@/styles/breakpoints"
import { commonStyles } from "@/styles/theme"

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  color: ${({ theme }) => theme.colors.secondary};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;

  @media screen and (width < ${breakpoint.tablet}) {
    display: none;
  }
`

export const MetaData = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.small};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  align-items: center;
  width: 100%;

  @media screen and (width < ${breakpoint.tablet}) {
    justify-content: center;
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Wrapper = styled.div`
  display: flex;
  max-height: 250px;
  width: 90%;
  gap: ${({ theme }) => theme.spacings.small};
  text-align: left;

  @media screen and (width < ${breakpoint.tablet}) {
    flex-direction: column;
    max-height: 100%;
    text-align: center;
    align-items: center;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-underline-offset: 7px;
  display: block;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (width < ${breakpoint.tablet}) {
    margin: ${commonStyles.spacings.large} auto;
  }
`
