import * as S from "./FirstBanner.style"
import niceView from "../../../images/nice_view.jpeg"

export default function FirstBanner() {
  return (
    <>
      <>
        <S.Title>
          <b>Hey!</b> Discover my stories and creative ideas.
        </S.Title>
      </>
      <S.BannerWrapper>
        <S.StyledImage
          src={niceView}
          alt="nice view"
          width={450}
          height={500}
        />
        <S.BannerSection>
          <S.SubTitle>Simple Ways to Inspire Your Inner Innovator</S.SubTitle>
          <S.Text>
            Whether you&apos;re an aspiring, a curious thinker, or simply
            looking to add a touch of creativity to your routine, our jorney
            together will remind you that creativity knows no bounds. Get ready
            to unlock a world of innovation and self-expression!.
          </S.Text>
          <S.BannerButton> Read More </S.BannerButton>
        </S.BannerSection>
      </S.BannerWrapper>
    </>
  )
}
