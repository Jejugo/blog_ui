import styled from "styled-components"

export const Title = styled.h1`
  font-size: 48px;
  text-align: justify;
`

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`

export const BannerSection = styled.div`
  font-size: 24px;
  text-align: left;
`

export const BannerButton = styled.button`
  background-color: rgb(216, 216, 216);
  color: rgb(51, 51, 51);
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: 0.5s ease;
  font-weight: bold;

  &:hover {
    background-color: rgb(51, 51, 51);
    color: rgb(216, 216, 216);
    transition: 0.5s ease;
  }
`
