import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffects from '@/components/TransitionEffects'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
  <>
       <Head>
        <title>Kanayo | Articles</title>
        <meta name="description" content="This is all about me as a Fullstack developer" />
    </Head>

    <TransitionEffects />

    <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
            <AnimatedText text="Nothing Breaks Like the Heart" className="mb-16" />
            <ul>

            </ul>
        </Layout>
    </main>
  </>
  )
}

export default articles