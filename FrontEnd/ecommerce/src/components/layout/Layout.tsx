import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <Outlet />
      </main>
    </>
  )
}
