import React from "react"

import PrivateRoute from "@/components/PrivateRoute"

export default function layout({ children }) {
  return <PrivateRoute>{children}</PrivateRoute>
}
