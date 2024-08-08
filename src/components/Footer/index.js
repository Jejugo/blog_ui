"use client"

import lama from "@images/llama_icon.png"
import facebook from "@public/icons/facebook.png"
import instagram from "@public/icons/instagram.png"
import tiktok from "@public/icons/tiktok.png"
import youtube from "@public/icons/youtube.png"
import Image from "next/image"
import Link from "next/link"

import * as S from "./Footer.style"
import Flex from "@/Components/Flex"

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
      <Flex gap="100px">
        <Flex flex="3" direction="column" gap="15px">
          <Flex gap={"20px"} alignItems={"center"}>
            <Image
              src={lama}
              alt="Lama"
              height={60}
              width={60}
              style={{ borderRadius: "50%" }}
            />
            <S.Title>Lamablog</S.Title>
          </Flex>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis, nibh sed dictum egestas. Ut in lacus libero. Sed
            efficitur odio id elit fringilla, non aliquam nisi elementum. Nulla
            facilisi. Sed ultrices, nunc sit amet tincidunt tincidunt, nulla
            justo ultrices nisi, quis tincidunt nunc orci at nibh. Nulla
            facilisi. Nulla facilisi.
          </div>
          <Flex gap="10px">
            {socialIcons.map((socialIcon, index) => (
              <Link href={socialIcon.link} key={index}>
                <Image
                  src={socialIcon.image}
                  alt={socialIcon.name}
                  height={20}
                  width={20}
                />
              </Link>
            ))}
          </Flex>
        </Flex>

        <Flex
          flex="2"
          justifyContent="space-between"
          alignItems="center"
          margin="0 auto"
          padding="0 20px"
        >
          <Flex direction="column" gap="10px">
            <S.LinkTitle>Link</S.LinkTitle>
            <Link href="/">Homepage</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </Flex>
          <Flex direction="column" gap="10px">
            <S.LinkTitle>Tags</S.LinkTitle>
            <Link href="/style">Style</Link>
            <Link href="/fashion">Fashion</Link>
            <Link href="/coding">Coding</Link>
            <Link href="/travel">Travel</Link>
          </Flex>
          <Flex direction="column" gap="10px">
            <S.LinkTitle>Social</S.LinkTitle>
            {socialIcons.map((socialIcon, index) => (
              <Link href={socialIcon.link} key={index}>
                {socialIcon.name}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </S.FooterWrapper>
  )
}
