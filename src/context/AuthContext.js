"use client"

import { useRouter } from "next/navigation"
import React, { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem("token")
    if (!token) {
      setIsAuthenticated(false)
      router.push("/login")
    } else {
      setIsAuthenticated(true)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    router.push("/")
  }

  const setCredentials = ({ username, email }) => {
    setUsername(username)
    setEmail(email)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        checkAuth,
        logout,
        setCredentials,
        credentials: { username, email },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
