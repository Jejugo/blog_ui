"use client";

import styled from "styled-components";
import MainLayout from "../layouts/MainLayout/index";
import { Inter } from 'next/font/google';
import FirstBanner from "@/components/FirstBanner";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
        <MainLayout className={inter.className}>
          {/* <h1> Hey lama dev here! Discover my stories and creative ideas </h1> */}
          <FirstBanner/>
        </MainLayout>
  );
}
