import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import TransitionEffects from '@/components/TransitionEffects'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Maduka Kanayo Web Dev Portfolio</title>
        <meta name="description" content="Kanayo Reactjs Portfolio" />
      
      </Head>

     <TransitionEffects />


      <main className="flex items-center text-dark w-full min-h-screen">
       {/* Found 0 vulnerabilities */}
       <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
               <Image src={profilePic} alt="Kanayo" className='w-55 h-55'/>
            </div>
            <div  className="w-1/2 flex flex-col items-center self-center">
                <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left'/>
                <p className='my-4 text-base font-medium'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js, PHP and web development. 
                </p>
                
                <div className="flex items-center self-start mt-2">
                  <Link href="/kanayoJFrontend_Main.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">Resume <LinkArrow className={"w-6 ml-1"} /> </Link>
                  <Link href="mailto:godwinkamagco@gmail.com" className="underline ml-4 text-lg font-medium capitalize text-dark" target={"_blank"}>Contact</Link>
                </div>

            </div>

          </div>
         </Layout>
         <HireMe />
         <div className='absolute right-8 bottom-8 inline-block w-20 '>
            <Image src={lightBulb} alt="Kanayo" className="w-full h-auto" />
         </div>
      </main>
    </>
  )
}
