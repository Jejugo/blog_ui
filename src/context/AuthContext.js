"use client"

import { useRouter } from "next/navigation"
import React, { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
