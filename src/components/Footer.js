import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
   <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light ">
       <Layout className="py-8 flex items-center justify-between">
           <span>{new Date().getFullYear()} &copy; All Rights Reerved.</span>
           <div className="flex items-center ">
               Build with <span className="text-primary text-2xl px-1 ">&#9825;</span><Link href="/">Kanayo</Link>
            </div>
                <Link href="/">Call 09158209130</Link>
                
       </Layout>
   </footer>
  )
}

export default Footer