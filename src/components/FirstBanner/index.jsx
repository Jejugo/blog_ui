import Image from "next/image"

import * as S from "./FirstBanner.style"
import niceView from "../../images/nice_view.jpeg"

export default function FirstBanner() {
  return (
    <>
      <S.Title> Title </S.Title>

      <S.BannerWrapper>
        <Image src={niceView} alt="nice view" width={450} height={500} />
        <S.BannerSection>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros
            bibendum, tincidunt ligula eu, bibendum nunc. Nunc vitae nunc sed
            nisi euismod fringilla. Proin eget erat eget ipsum tincidunt
            aliquam. Cras vehicula, dolor nec ultricies fringilla, quam nunc
            bibendum nisl, vitae tincidunt orci nibh eget leo.
          </p>
          <S.BannerButton> Read More </S.BannerButton>
        </S.BannerSection>
      </S.BannerWrapper>
    </>
  )
}
