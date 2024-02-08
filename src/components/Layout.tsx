import React, { ReactNode } from "react"
import { useRouter } from "next/router"
import Navbar from "./NavBar/NavBar"

const Layout = ({ children }: { children: ReactNode }) => {
  const route = useRouter()

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {route.route === "/create-post" ? " " : ""}
    </>
  )
}

export default Layout
