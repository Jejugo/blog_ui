"use client"

import Switch from "@mui/material/Switch"
import facebook from "@public/icons/facebook.png"
import instagram from "@public/icons/instagram.png"
import tiktok from "@public/icons/tiktok.png"
import youtube from "@public/icons/youtube.png"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"

import * as S from "./Navbar.style"
import { useAuth } from "@/context/AuthContext"
import { useTheme } from "@/context/ThemeContext"

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

export default function Navbar() {
  const { toggleTheme, theme } = useTheme()
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  const [isOpen, setOpen] = useState(false)

  const isChecked = theme === "dark"

  const handleOpen = () => {
    setOpen((prevstate) => !prevstate)
  }

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <S.Main>
        <S.Icons>
          {socialIcons.map((socialIcon, index) => (
            <S.LinkIcons href={socialIcon.link} key={index}>
              <Image src={socialIcon.image} alt={socialIcon.name} fill />
            </S.LinkIcons>
          ))}
        </S.Icons>

        <S.Title>blog-ui</S.Title>

        <S.Buttons>
          <Switch onChange={toggleTheme} checked={isChecked} />
          <S.MenuHamburguer>
            <S.MenuButton onClick={handleOpen}>
              <S.MenuIcon />
            </S.MenuButton>
          </S.MenuHamburguer>

          <S.LinkPages href="/">Home</S.LinkPages>
          <S.LinkPages href="/contact">Contact</S.LinkPages>
          <S.LinkPages href="/about">About</S.LinkPages>
          {isAuthenticated ? (
            <S.LinkPages href="/write">Write</S.LinkPages>
          ) : (
            <S.LinkPages href="/login">Login</S.LinkPages>
          )}
        </S.Buttons>
      </S.Main>

      {isOpen && (
        <S.MenuOptions>
          <S.MenuItem href="/">Home</S.MenuItem>
          <S.MenuItem href="/contact">Contact</S.MenuItem>
          <S.MenuItem href="/about">About</S.MenuItem>
          {isAuthenticated ? (
            <S.MenuItem href="/write">Write</S.MenuItem>
          ) : (
            <S.MenuItem href="/login">Login</S.MenuItem>
          )}
        </S.MenuOptions>
      )}
    </>
  )
}
