"use client";

import styled from "styled-components";
import MainLayout from "../layouts/MainLayout/index";
import InitialContent from "@/components/InitialContent";

const Root = styled.div`
  width: 100%;
`;

export default function Home() {
  return <Root> 
           <MainLayout>
             {/* <h1> Hey lama dev here! Discover my stories and creative ideas </h1> */}
             <InitialContent/>
           </MainLayout>
         </Root>;
}
