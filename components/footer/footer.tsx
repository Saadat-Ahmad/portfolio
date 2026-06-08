"use client"

import React from "react"
import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, Twitter } from "lucide-react"

export default function Footer() {

  return (
    <footer className="bg-secondary border-t mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
             <Link href="/" className="text-lg font-semibold">syed saadat ahmad</Link>
        </div>

        {/* Center - Nav Links */}
        <div className="flex space-x-10">
          {/* <Link href="/" className="hover:text-primary text-sm transition-colors"></Link> */}
        </div>

        {/* Right - Socials and Theme */}
        <div className="flex items-center space-x-4">
                  <a href="https://instagram.com/saadatahmad_" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Instagram className="w-5 h-5" />
          </a>

          <a href="https://github.com/Saadat-Ahmad" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/syedsaadatahmad" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Linkedin className="w-5 h-5" />
          </a>
          
          <a href="https://twitter.com/in/saadatahmad_" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="mailto:s.saadat.ahmad@gmail.com" className="hover:text-primary">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-muted-foreground pb-4">
        &copy; {new Date().getFullYear()} Syed Saadat Ahmad. All rights reserved.
      </div>
    </footer>
  )
}
