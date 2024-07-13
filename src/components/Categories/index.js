import Image from "next/image"

import * as S from "./Categories.style"
import computer from "../../images/Computer.png"
import fashionMan from "../../images/Fashion_Man.png"
import kombi from "../../images/Kombi.png"
import pasta from "../../images/Pasta.png"
import sunGlasses from "../../images/SunGlasses.png"
import world from "../../images/World.png"

export const categories = [
  {
    id: "Fashion",
    image: <Image src={fashionMan} alt="Fashion Man" width={50} height={50} />,
    color: "#FF6961",
  },
  {
    id: "Food",
    image: <Image src={pasta} alt="Pasta" width={50} height={50} />,
    color: "#77DD77",
  },
  {
    id: "Coding",
    image: <Image src={computer} alt="computer" width={50} height={50} />,
    color: "#FDFD96",
  },
  {
    id: "Style",
    image: <Image src={sunGlasses} alt="sunGlasses" width={50} height={50} />,
    color: "#84B6F4",
  },
  {
    id: "Travel",
    image: <Image src={kombi} alt="kombi" width={50} height={50} />,
    color: "#FDCAE1",
  },
  {
    id: "Culture",
    image: <Image src={world} alt="world" width={50} height={50} />,
    color: "#95B8F6",
  },
]

export default function Categories() {
  return (
    <>
      <S.Title>Popular Categories</S.Title>
      <S.Containter>
        {categories.map((category, index) => (
          <S.ContainerButton key={index}>
            {category.image} {category.id}
          </S.ContainerButton>
        ))}
      </S.Containter>
    </>
  )
}
