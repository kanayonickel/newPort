import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref= useRef(null)
    return  (
    
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">

        <LiIcon reference={ref} />
        <motion.div initial={{y:50}}
        whileInView={{y:0}}
        transition = {{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl">{position}<a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a></h3>
            <span className='capitalize font medium text-dark/75'>{time} | {address}</span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {

    const ref = useRef(null);
    const {scrollYProgress} =  useScroll({
    target: ref,
    offset: ["start end", "center start"]
}
)

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light '>
            Ex[per]ience
        </h2>
       
            <div ref={ref} className="w-[75%] mx-auto relative dark:text-light " >

             <motion.div 
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-7 top-8 w-[4px] h-full bg-dark origin-top" />

                <ul className="justify-between items-start flex flex-col ml-4">
                    <Details  
                    Position= "Backend Developer"  company="Tinkoko"
                    companyLink="www.tinkoko.com"
                    time="2020-2022"  address="Wuse, Abuja"
                    work="Worked on a team responsible for developing Tinkoko's ecommerce website, including implementing new features such 
                    as product recommendations and user reviews, and optimizing the website's performance and reliability."
                    />


                    <Details
                    Position= "Intern"  company="Byte Networks"
                    time="Summer 2020"  address="Yaba, Lagos."
                    work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
                    share short-form video content, including designing and implementing a new user interface and developing 
                    the backend infrastructure to support the feature." />

                <Details
                    Position= "Web Developer"  company="UCNET Technologies"
                    time="2018"  address="Asaba, Delta."
                    work="Worked on a team responsible for developing new features for University portal and e-learning platform, including improving the accuracy and relevance of search results for student bio-data and 
                    developing new tools for data analysis and visualization" />
                </ul>
            </div>

    </div>
  )
}

export default Experience