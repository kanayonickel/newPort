import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
// import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import flixo from "../../public/images/projects/flix.png"
import wibe from "../../public/images/projects/fashion-studio-website.jpg"
import Nike from "../../public/images/projects/Nike.png"
import Delphia from "../../public/images/projects/anon.jpeg"
import portfolio from "../../public/images/projects/portfolio-cover-image.jpg"
import NFT from "../../public/images/projects/nft-collection-website-cover-image.jpg"


import {motion} from "framer-motion"
import TransitionEffects from '@/components/TransitionEffects'

const FramerImage = motion(Image);



const FeatureProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border-solid border-dark bg-light shadow-2xl p-6'>
          <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}  transition="{{duration:0.2}}" 
             priority sizes ="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
          </Link>

          <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
              <span className='text-primary font-medium text-xl'>{type}</span>
                  <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                  <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
              </Link>

              <p className='my-2 font-medium text-dark'>{summary}</p>

              <div className='mt-2 flex item-center'>
                  
                  <Link href={github} target="_blank" className="w-10"> <GithubIcon /> </Link>
                  <Link href={link} target="_blank" className="ml-4 bg-dark rounded-lg text-light p-2 px-6 text-lg font-semibold"> Visit project </Link>
              </div>
          </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid  shadow-2xl bg-light p-6 relative">
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-ng' >
            <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}}  transition="{{duration:0.2}} 
             " />
            </Link>

          <div className='w-full flex flex-col items-start justify-between mt-4'>
              <span className='text-primary font-medium text-xl'>{type}</span>
                  <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                  <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
              </Link>


              <div className='w-full mt-2 flex item-center justify-between'>
              <Link href={link} target="_blank" className=" text-lg font-semibold hover:underline"> Visit</Link>
              <Link href={github} target="_blank" className="w-8"> <GithubIcon /> </Link>
        
              </div>
          </div>
        </article>
    )
}

const projects = () => {
  return (
        <>
            <Head>
                <title>Kanayo | Projects Page</title>
                <meta name="description" content="This is all about me as a Fullstack developer" />
            </Head>
            <TransitionEffects />
            
            <main className="w-full mb-16 flex flex-col items-center justify-cnter">
                <Layout className="pt-16">
                    <AnimatedText className="mb-10 lg" text="Imagination Trumps Success"/>
                    <div className="grid grid-cols-1 2 gap-24">
                        <div className="col-span-12">
                           <FeatureProject   
                           title="Flixori Movie App"
                           img={flixo}
                            summary="A simple fully responsive Movie web front-end using  Vanilla CSS and Javascript. This is an exercise on working a front end project without using Frameworks."
                            link="https://flixori.pages.dev/"
                            github="/"
                            type="Featured Project"/>

                         </div>   

                         <div className="col-span-6">
                            <Project   
                            title="Wibe Fashion Web App"
                            img={wibe}
                                summary="Stunning Fashion Studio Website with React JS [ Locomotive Scroll + GSAP + Framer Motion ]. This projects showcases the power of going out of the box"
                                link="wibe.pages.dev"
                                github="/"
                                type="Project 1"/>
                         </div>


                         <div className="col-span-6">
                            <Project   
                            title="NFT Collection Page"
                            img={NFT}
                                summary="A feature-rich NFT Collection Page."
                                link="https://nftpsy.pages.dev/"
                                github="/"
                                type="Project 2"/>
                         </div>    



                         <div className="col-span-12">
                         <FeatureProject   
                           title="Ecommerce Practice"
                           img={Delphia}
                            summary="Delphia is a fully responsive ecommerce website Landing page, maximum compatiblities in all mobile devices, built using HTML, CSS, and JavaScript.."
                            link="/"
                            github="/"
                            type="Featured Project"/>

                         </div>   
                         <div className="col-span-6">
                            <Project   
                                title="Portfolio Showcase"
                                img={portfolio}
                                    summary="Delphia is a fully responsive ecommerce website Landing page, maximum compatiblities in all mobile devices, built using HTML, CSS, and JavaScript.."
                                    link="http://localhost:3000/"
                                    github="/"
                                    type="Featured Project"/>
                         </div>
                         <div className="col-span-6">
                            <Project   
                                title="Nike Landing Page"
                                img={Nike}
                                    summary="A high-fidelity prototype of a Shoe page built with NextJS and framer motion.."
                                    link="https://nikemock.pages.dev "
                                    github="/"
                                    type="Featured Project"/>
                         </div>  

                    </div>
                </Layout>

            </main>
        </>
  )
}

export default projects