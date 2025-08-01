"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Copy, SquareArrowOutUpRight } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/footer"

export default function HomePage() {
  const email = "s.saadat.ahmad@gmail.com"
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const projects = [
    {
      title: "nCrypt",
      image: "/ncrypt.jpg",
      line: "Create unique encryptions and cyphers with your friends",
      description: "nCrypt lets you create and share your own custom encryption methods for truly personal communication. Explore classic ciphers like Caesar and Base64, or design unique encryptions to keep messages private. Share your custom codes with friends and build a secure, personal language together.",
      link: "https://saadatahmad.pythonanywhere.com",
    },
    {
      title: "JannSeva",
      image: "/jannseva.png",
      line: "Providing quick healthcare to rural India in native dialects",
      description: "JannSeva is a health support platform built for rural India. It uses the local dialect of the users' region to respond to users' health-related questions and give health education powered by AI. JannSeva also maintains users' medical history and has users' local weather & pollution data to give region specific replies and insights. It’s safe and secure, with simple phone number login using OTP.",
      link: "https://github.com/Saadat-Ahmad/JannSeva",
    },
    {
      title: "EnVision",
      image: "/envision.png",
      line: "Browser Extension for the colorblind people",
      description: "This web browser extension enhances accessibility for color-blind users by automatically daltonizing website content. Daltonization is a technique that adjusts colors to make them more distinguishable for people with color vision deficiencies. The extension analyzes the colors on any webpage and subtly shifts hues and contrasts to improve clarity without altering the overall design. This ensures a more inclusive and comfortable browsing experience.",
      link: "https://github.com/Saadat-Ahmad/envision-chrome-extension",
    }
  ]

  const experiences = [
    {
      title: "Intern – AMU Innovation Foundation",
      date: "June 2024 – July 2024",
      description: "Built geolocation data-driven satellite image capturing programs",
    },
    {
      title: "Satellite payload designer – SS AMU SAT",
      date: "July 2024 – Present",
      description: "Implemented the satellite imaging payload on RaspberryPi CM4. Established communication between payload and other satellite subsystems.",
    },
    {
      title: "Web-Development Intern – Orbitalink Pvt. Ltd.",
      date: "May 2025 – July 2025",
      description: "Built and deployed a CI/CD pipeline with separate workflows for production and development.", "Developed various internal APIs, focused on user authentication, session management, admin privilege system, and integrated third party APIs.",
    },
    
  ]

  return (
    <div>
      <Navbar></Navbar>
    <main className="container mx-auto px-4 py-12 max-w-4xl space-y-20">
    

      {/* Introduction */}
      <section className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <Link href={"https://www.linkedin.com/in/syedsaadatahmad/"}>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={250}
          height={250}
          className="rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110 hover:translate-1.5"
        />
        </Link>
        <div className="space-y-2">
          <h2 className="text-3xl">Hey, its <span className="text-accent">Saadat</span></h2>
          <h3 className="text-xl pt-4.5 mb-0 pb-0">Computer Engineering undergrad <br/></h3>
          <p className="pt-0 mt-0">@ Aligarh Muslim University</p>
          <p className="text-muted-foreground pt-5">
            Software developer based out of India. <br></br>Building solutions is a surprisingly satisfying experience.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience">
        <h2 className="text-2xl text-accent font-semibold mb-6">Experience</h2>
        <div className="pl-6 pb-8 space-y-8 border-l-2 border-dotted">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <span className="absolute left-[-33px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-accent"></span>
              <h3 className="font-semibold mt-20">{exp.title}</h3>
              <span className="text-sm text-muted-foreground">{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          ))}
          </div>
          <div className="pl-6 mt-0 pt-0 space-y-8 border-l-2 border-none">
            <div className="relative">
              <span className="absolute left-[-33px] top-1 w-4 h-4 bg-primary rounded-full border-2 border-accent"></span>
              <h3 className="font-semibold">Next Adventure?</h3>
              <span className="text-sm text-muted-foreground">Present – Forseeable Future</span>
              <p>Lets build the future together. <Link href={"https://www.linkedin.com/in/syedsaadatahmad/"} className="inline-flex underline text-accent">Lets get in touch <SquareArrowOutUpRight className="ml-2 w-5 h-5"/></Link></p>
            </div>
        </div>
      </section>

      {/* Project Grid Section */}
<section id="projects">
  <h2 className="text-2xl text-accent font-semibold mb-6">Projects</h2>
  <div className="grid lg:grid-cols-3 md:grid-cols-1 md:p-3.5 gap-6">
    {projects.map((project, idx) => (
      <Link key={idx} href={project.link} target="_blank" className="group relative">
        <Card className="relative overflow-hidden rounded-1xl border bg-auto backdrop-invert-25 hover:shadow-2xl transition duration-300 ease-in-out hover:scale-110 hover:backdrop-invert-100">
          <CardContent className="pt-0 space-y-3">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-1xl object-cover max-h-full w-full hover:opacity-0"
            />
            <CardTitle className="text-lg text-accent font-bold hover:opacity-0">{project.title}</CardTitle>
            <CardTitle className="text-sm hover:opacity-0">{project.line}</CardTitle>
            
            {/* Description on hover */}
        <div className="absolute inset-0 p-4 text-sm bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-bg opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <h1 className="text-lg mb-4 text-accent font-bold">{project.title}</h1>
              <p className="text-fg">{project.description}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
  <div className="flex items-center justify-center">
  <Link href="https://github.com/Saadat-Ahmad" target="_blank" className="inline-flex items-center hover:underline"> 
  See all <ChevronDown/> 
  </Link>
  </div>
</section>


      {/* Socials */}
      <section id="socials">
        <h2 className="text-2xl text-accent font-semibold mb-4">Get in touch</h2>
        <div className="flex gap-3 text-xs justify-center items-center sm:gap-10 sm:text-base">
          <Link href="https://github.com/Saadat-Ahmad" target="_blank" className="hover:underline">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/syedsaadatahmad/" target="_blank" className="hover:underline">
            LinkedIn
          </Link>
          <Link href="https://twitter.com/saadatahmad_" target="_blank" className="hover:underline">
            Twitter/X
          </Link>
           <Link href="https://instagram.com/saadatahmad_" target="_blank" className="hover:underline">
            Instagram
          </Link>
          <Button onClick={copyEmail} variant="secondary" className="transition duration-300 text-xs ease-in-out hover:scale-110 sm:text-base">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-0: sm:w-6 sm:h-6 sm:mr2" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-0 sm:w-6 sm:h-6 sm:mr2" /> Copy Email
              </>
            )}
          </Button>
        </div>
      </section>
    </main>
    <Footer/>
    </div>
  )
}
