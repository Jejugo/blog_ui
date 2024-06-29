import Image from "next/image"
import React, { useState } from "react"
import styled from "styled-components"

import niceView from "../../images/nice_view.jpeg"

const Title = styled.h1`
  font-size: 48px;
`

const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`

const BannerSection = styled.div`
  font-size: 24px;
  text-align: left;
`

const BannerButton = styled.button`
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

export default function FirstBanner() {
  return (
    <>
      <Title> Title </Title>

      <BannerWrapper>
        <Image src={niceView} alt="nice view" width={450} height={500} />
        <BannerSection>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros
            bibendum, tincidunt ligula eu, bibendum nunc. Nunc vitae nunc sed
            nisi euismod fringilla. Proin eget erat eget ipsum tincidunt
            aliquam. Cras vehicula, dolor nec ultricies fringilla, quam nunc
            bibendum nisl, vitae tincidunt orci nibh eget leo.
          </p>
          <BannerButton> Read More </BannerButton>
        </BannerSection>
      </BannerWrapper>
    </>
  )
}
