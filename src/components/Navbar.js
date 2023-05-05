import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from "framer-motion"
import useThemeSwitcher from './hook/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => {

    const router = useRouter();
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light ` } >&nbsp;</span>
        </Link>
    )
}

// custom link for the hamburger menu
// const CustomMobileLink = ({href, title, className="", toggle }) => {
//  const router = useRouter();

// const handleClick = () => {
//     toggle();
//     router.push(href)
// }

//     return(
//         <button href={href} className={`${className} relative group`} onClick={handleClick}>
//             {title}

//             <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light ` } >&nbsp;</span>
//         </button>
//     )
// }


// end of customlink for the hamburger menu


const Navbar = () => {

const [mode, setMode] = useThemeSwitcher();

//state for the hamburger menu
const [isOpen, setIsOpen]= useState(false);
const handleClick = () =>{
    setIsOpen(!isOpen)
}


  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
   {/* hamburger icon */}
        {/* <button className=" flex-col justify-center items-center hidden lg:flex"  onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5 '}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5 '} `}></span>
        </button>  */}

       {/* end of Hamburger menu icon */}

        
        <div className="w-full justify-between items-center lg:hidden">
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

                <button  onClick={() => setMode(mode === "light" ? "dark" : "light") } className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                    { 
                        mode === "dark" ? 
                        <SunIcon className={"fill-dark"} />  : <MoonIcon className={"fill-dark"} />
                    }
                </button>
           </nav>
        </div>

      

   {/* Mobile Menu */}

  

   {/* end of Menu */}
       

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
           <Logo />
        </div>

    </header>
  )
}

export default Navbar