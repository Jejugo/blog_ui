"use client"

import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

import { useAuth } from "../../context/AuthContext"

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!isAuthenticated) {
    router.push("/login")
    return null
  }

  return <>{children}</>
}

export default PrivateRoute
