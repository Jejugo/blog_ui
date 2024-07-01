import facebook from "@public/icons/facebook.png";
import instagram from "@public/icons/instagram.png";
import tiktok from "@public/icons/tiktok.png";
import youtube from "@public/icons/youtube.png";
import React from "react";
import Image from "next/image";
import * as S from "./Navbar.style";

const socialIcons = [{
  name: "Facebook",
  link: "https://www.facebook.com",
  image: facebook
},
{
  name: "Instagram",
  link: "https://www.instagram.com",
  image: instagram
},
{
  name: "Tiktok",
  link: "https://www.tiktok.com",
  image: tiktok
},
{
  name: "Youtube",
  link: "https://www.youtube.com",
  image: youtube
}
]

export default function Navbar() {
  return (
    <S.Main>
      {/* Div que contém os ícones */}
      <S.Icons>
        {socialIcons.map((socialIcon, index) => (
          <S.LinkIcons href={socialIcon.link} key={index}>
            <Image
              src={socialIcon.image}
              alt={socialIcon.name}
              fill
            />
          </S.LinkIcons>
        ))}
      </S.Icons>

      {/* Div que contém o título */}
      <S.Title>
        blog-ui
      </S.Title>

      {/* Div que contém os botões */}
      <S.Buttons>
        <S.LinkPages href="/home">Home</S.LinkPages>
        <S.LinkPages href="/contact">Contact</S.LinkPages>
        <S.LinkPages href="/about">About</S.LinkPages>
        <S.LinkPages href="/home">Login</S.LinkPages>
      </S.Buttons>
    </S.Main>
  );
}