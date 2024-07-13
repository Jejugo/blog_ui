import Image from "next/image"

import * as S from "./Categories.style"
import computer from "../../images/Computer.jpg"
import fashionMan from "../../images/Fashion_Man.jpg"
import kombi from "../../images/Kombi.jpg"
import pasta from "../../images/Pasta.jpg"

export const categories = [
  {
    id: "Fashion",
    image: <Image src={fashionMan} alt="Fashion Man" width={50} height={50} />,
  },
  {
    id: "Food",
    image: <Image src={pasta} alt="Pasta" width={50} height={50} />,
  },
  {
    id: "Coding",
    image: <Image src={computer} alt="computer" width={50} height={50} />,
  },
  {
    id: "Style",
    image: null,
  },
  {
    id: "Travel",
    image: <Image src={kombi} alt="kombi" width={50} height={50} />,
  },
  {
    id: "Culture",
    image: null,
  },
]

export default function Categories() {
  return (
    <>
      <S.Title>Popular Categories</S.Title>
      <S.Containter>
        {categories.map((category, index) => (
          <S.ContainerButton key={index}>{category}</S.ContainerButton>
        ))}
      </S.Containter>
    </>
  )
}
