import type { NextPage } from 'next'
import { Landing } from '@/components/Landing'
import { About } from '@/components/About'
import { ToggleTheme } from '@/components/ToggleTheme'

const Home: NextPage = () => (
  <>
    <ToggleTheme />
    <Landing />
    {/* <About /> */}
  </>
)

export default Home
