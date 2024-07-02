import React, { useEffect } from "react"

import { useAuth } from "../../context/AuthContext"

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!isAuthenticated) {
    return null
  }

  return <>{children}</>
}

export default PrivateRoute
