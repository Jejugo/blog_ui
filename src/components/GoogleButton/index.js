"use client"

import styled from "styled-components"

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: #757575;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 100%;

  &:hover {
    background-color: #f5f5f5;
  }
`

const GoogleLogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const GoogleButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GoogleLogo
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with Google</span>
      </div>
    </Button>
  )
}

export default GoogleButton
