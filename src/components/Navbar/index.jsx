import styled from "styled-components";
import facebook from "@public/icons/facebook.png";
import instagram from "@public/icons/instagram.png";
import tiktok from "@public/icons/tiktok.png";
import youtube from "@public/icons/youtube.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    align-items: center;
`

const Icons = styled.div`
    display: flex;
    gap: 10px;
    
`

const Buttons = styled.div`
    display: flex;
    gap: 10px;
`

const LinkStyle = styled(Link)`
    width: 20px;
    height: 20px;
    position: relative;
`

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
    <Main>
      {/* Div que contém os ícones */}
      <Icons>
        {socialIcons.map((socialIcon, index) => (
          <LinkStyle href={socialIcon.link} key={index}>
            <Image
              src={socialIcon.image}
              alt={socialIcon.name}
              fill
            />
          </LinkStyle>
        ))}
      </Icons>

      {/* Div que contém o título */}
      <div>
        blog-ui
      </div>

      {/* Div que contém os botões */}
      <Buttons>
        <Link href="/home">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/home">Login</Link>
      </Buttons>
    </Main>
  );
}