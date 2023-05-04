import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { TwitterIcon, GithubIcon, LinkedInIcon } from './Icons'
import { motion } from "framer-motion"

const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
            <CustomLink href="/" title="Home" className="mr-4"/>
            <CustomLink href="/about" title="About" className="mx-4"/>
            <CustomLink href="/projects" title="Projects" className="mx-4" />
            <CustomLink href="/articles" title="Articles" className="ml-4"/>
        </nav>

      

        <nav className="flex items-center justify-center flex-wrap">
            <motion.a whileHover={{y:-2 }} whileTap={{scale: 0.9}} className="w-6 mx-3" href="https://twitter.com" target={"_blank"}><TwitterIcon /></motion.a>
            <motion.a href="https://github.com/kanayonickel/" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale: 0.9}} className="w-6 mx-3"><GithubIcon/></motion.a>
            <motion.a href="https://www.linkedin.com/in/kene-maduka" target={"_blank"} whileHover={{y:-2 }} whileTap={{scale: 0.9}} className="w-6 ml-3"><LinkedInIcon /></motion.a>
            {/* <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link> */}
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
           <Logo />
        </div>

    </header>
  )
}

export default Navbar