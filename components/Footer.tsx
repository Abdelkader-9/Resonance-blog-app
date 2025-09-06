import { quickLinks } from "@/lib/data"
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
export const socialLinks = [
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
];

const Footer = () => {
  return (
   <footer className="bg-background border-t border-border/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Resonance
                </h3>
                <p className="text-muted-foreground mb-4">
               Writing that resonates with the curious minds of the digital age.
              Exploring the intersection of technology, design, and creativity.
                </p>
                <div className="flex space-x-4">
                    {socialLinks.map((link)=>{
                        const Icon = link.icon;
                        return(
                        <Link
                        key={link.label}
                    href={link.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                            <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">
                    Quik LInks
                </h4>
                <ul className="space-y-2">
                    {quickLinks.map((link)=>(
                            <li key={link.name} >
                                <Link key={link.name} href={link.href}
                             className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                            >
                                {link.name}
                                 
                            </Link>
                            </li>
                  ))}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-foreground mb-4">
                    Stay Updated
                </h4>
                <p className="text-muted-foreground mb-4">
                      Subscribe to get the latest posts delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input type="email" placeholder="Your email" />
                    <Button>Subscribe</Button>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>
                © {new Date().getFullYear()} Resonance. All rights reserved.
            </p>
        </div>
    </div>
   </footer>
  )
}

export default Footer