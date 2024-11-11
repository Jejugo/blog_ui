import Image from "next/image"
import styled from "styled-components"

const StyledDescription = styled.div`
  text-align: left;
`

const FeaturedCategoryPost = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large} auto;
  gap: ${({ theme }) => theme.spacings.large};
`

const FeaturedPost = () => {
  return (
    <FeaturedCategoryPost>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
        width={350}
        height={350}
        alt="featuredImage"
      />
      <StyledDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledDescription>
    </FeaturedCategoryPost>
  )
}

export default FeaturedPost
