"use client"

import { useRouter, usePathname } from "next/navigation"
import React, { createContext, useState, useEffect, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [pathname])

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
    checkAuth()
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        checkAuth,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
