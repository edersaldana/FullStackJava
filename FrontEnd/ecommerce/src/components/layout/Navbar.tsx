import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <h1 className="text-lg font-semibold">
          Mini Ecommerce
        </h1>

        <nav className="flex gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link to="/orders">
            <Button variant="ghost">Orders</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar