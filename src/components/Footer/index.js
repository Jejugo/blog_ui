"use client"

import lama from "@images/llama_icon.png"
import facebook from "@public/icons/facebook.png"
import instagram from "@public/icons/instagram.png"
import tiktok from "@public/icons/tiktok.png"
import youtube from "@public/icons/youtube.png"
import Image from "next/image"

import * as S from "./Footer.style"

const socialIcons = [
  {
    name: "Facebook",
    link: "https://www.facebook.com",
    image: facebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com",
    image: instagram,
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com",
    image: tiktok,
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com",
    image: youtube,
  },
]

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.Blog>
        <S.HeaderWrapper>
          <S.StyledImage src={lama} alt="Lama" height={60} width={60} />
          <S.Title>Lamablog</S.Title>
        </S.HeaderWrapper>
        <S.Description>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          facilisis, nibh sed dictum egestas. Ut in lacus libero. Sed
          efficitur odio id elit fringilla, non aliquam nisi elementum. Nulla
          facilisi. Sed ultrices, nunc sit amet tincidunt tincidunt, nulla
          justo ultrices nisi, quis tincidunt nunc orci at nibh. Nulla
          facilisi. Nulla facilisi.`}
        </S.Description>
        <S.SocialIcons>
          {socialIcons.map((socialIcon, index) => (
            <S.Icons href={socialIcon.link} key={index}>
              <Image
                src={socialIcon.image}
                alt={socialIcon.name}
                height={20}
                width={20}
              />
            </S.Icons>
          ))}
        </S.SocialIcons>
      </S.Blog>

      <S.Links>
        <S.BlogLinks>
          <S.LinkTitle>Link</S.LinkTitle>
          <S.LinkPages href="/">Homepage</S.LinkPages>
          <S.LinkPages href="/blog">Blog</S.LinkPages>
          <S.LinkPages href="/about">About</S.LinkPages>
          <S.LinkPages href="/contact">Contact</S.LinkPages>
        </S.BlogLinks>
        <S.CategorieLinks>
          <S.LinkTitle>Tags</S.LinkTitle>
          <S.LinkPages href="/style">Style</S.LinkPages>
          <S.LinkPages href="/fashion">Fashion</S.LinkPages>
          <S.LinkPages href="/coding">Coding</S.LinkPages>
          <S.LinkPages href="/travel">Travel</S.LinkPages>
        </S.CategorieLinks>
        <S.SocialLinks>
          <S.LinkTitle>Social</S.LinkTitle>
          {socialIcons.map((socialIcon, index) => (
            <S.SocialMedia href={socialIcon.link} key={index}>
              {socialIcon.name}
            </S.SocialMedia>
          ))}
        </S.SocialLinks>
      </S.Links>
    </S.FooterWrapper>
  )
}
