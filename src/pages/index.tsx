import type { NextPage } from 'next'
import { Landing } from '@/components/Landing'
import Head from 'next/head'
import { About } from '@/components/About'

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Jacob Zhang</title>
      <meta
        name="description"
        content="I'm Jacob Zhang, a student at Purdue University majoring in Computer Science with a graduation year of 2023."
      />
      <link rel="canonical" href="https://jacobzhang.me" />
      <meta property="og:title" content="Jacob Zhang's website" />
      <meta property="og:site_name" content="Jacob Zhang" />
      <meta property="og:url" content="https://jacobzhang.me" />
      <meta
        property="og:description"
        content="I'm Jacob Zhang, a student at Purdue University majoring in Computer Science with a graduation year of 2023. Learn more about my experience at my website!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.jacobzhang.me/profile.jpg"
      />
    </Head>
    <Landing />
    {/* <About /> */}
  </>
)

export default Home
