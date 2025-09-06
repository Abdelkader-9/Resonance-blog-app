import { navlinks } from "@/lib/constats"
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16" >
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold font-serif ">Resonance</h1>
          </div>
            <div className="hidden md:flex items-center space-x-8">
              {navlinks.map((link)=> {
                return(
                  <Link href={link.Link}
                        key={link.id}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                )
              })}
              <ThemeToggle/>    
            </div>
            <MobileNav/>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar