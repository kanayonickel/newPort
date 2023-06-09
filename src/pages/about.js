import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, {useRef,  useEffect } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Happyken.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffects from '@/components/TransitionEffects'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref);

    useEffect(() => {
      if(isInView) {
          motionValue.set(value);
      }
    }, [isInView, value, motionValue])

    useEffect(() => {
           springValue.on("change", (latest) =>{
                if(ref.current && latest.toFixed(0) <= value ){
                    ref.current.textContent = latest.toFixed()
                }
           })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
      <>
    <Head>
        <title>Kanayo | About Me</title>
        <meta name="description" content="This is all about me as a Fullstack developer" />
    </Head>

<TransitionEffects />

     <main className='flex w-full flex-col items-center justify-center'>
         <Layout className="pt-16">
         <AnimatedText text="Passion Fuels Purpose!" className="mb-16"/> 
         <div className="grid w-full grid-cols-8 gap-16">
             <div className="col-span-3 flex flex-col items-start justify start dark:text-light ">
             <h2 className="mb-4 text-lg font-bold uppercase text-dark/75" >BIO</h2>
                <p  className="font medium"> Hi, I'm Kanayo, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.</p>

                <p  className="my-4 font medium">I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. </p>

                <p className="font medium">Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
             </div>

                <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                        <Image src={profilePic} alt="Kene Maduka" className="rounded-2xl w-full h-auto"  priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div> 

                    <div className="col-span-2 flex flex-col items-end justify-between dark:text-light ">
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={12} />+</span>
                            <h2 className="text-xl font-medium capitalized text-dark/75 dark:text-light ">satisified clients</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={25} />+</span>
                            <h2 className="text-xl font-medium capitalized text-dark/75 dark:text-light ">projects completed</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center">
                            <span className="inline-block text-7xl font-bold"><AnimatedNumbers value={4} />+</span>
                            <h2 className="text-xl font-medium capitalized text-dark/75 dark:text-light ">years of experience</h2>
                        </div>

                    </div>

                </div>

                <Skills/>
                <Experience />
                <Education />
         </Layout>
     </main>
    </>
  )
}

export default about