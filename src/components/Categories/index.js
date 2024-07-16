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
    id: 0,
    name: "Fashion",
    image: <Image src={fashionMan} alt="Fashion Man" width={50} height={50} />,
    //color: "#FECCCC",
  },
  {
    id: 1,
    name: "Food",
    image: <Image src={pasta} alt="Pasta" width={50} height={50} />,
    //color: "#D9FFC9",
  },
  {
    id: 2,
    name: "Coding",
    image: <Image src={computer} alt="computer" width={50} height={50} />,
    //color: "#FFF2B9",
  },
  {
    id: 3,
    name: "Style",
    image: <Image src={sunGlasses} alt="sunGlasses" width={50} height={50} />,
    //color: "#B9CEFF",
  },
  {
    id: 4,
    name: "Travel",
    image: <Image src={kombi} alt="kombi" width={50} height={50} />,
    //color: "#FDCAE1",
  },
  {
    id: 5,
    name: "Culture",
    image: <Image src={world} alt="world" width={50} height={50} />,
    //color: "#BBFDFF",
  },
]

export default function Categories() {
  return (
    <>
      <S.Title>Popular Categories</S.Title>
      <S.Containter>
        {categories.map((category, index) => (
          <S.ContainerButton key={index} name={category.name}>
            {category.image} {category.name}
          </S.ContainerButton>
        ))}
      </S.Containter>
    </>
  )
}
