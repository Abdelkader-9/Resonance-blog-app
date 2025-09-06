"use client";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import { navlinks } from "@/lib/constats"
import Link from "next/link"
import { useState } from "react";

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="md:hidden flex items-center space-x-4 ">
        <ThemeToggle/>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
        <Menu className="w-5 h-5"/>
    </Button>
  </SheetTrigger>
  <SheetContent>
    <div className="flex flex-col space-y-4 mt-8 p-8">
        {navlinks.map((link)=>(
            <Link key={link.id} href={link.Link} 
            className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
            onClick={()=>setIsOpen(false)}
            >
                {link.title}
            </Link>
        ))}
    </div>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default MobileNav