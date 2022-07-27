import { FC } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import { useTheme } from '@/styles/theme'
import createEmotionCache from '@/utils/createEmotionCache'
import { ThemeContext } from '@/context/ThemeContext'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) => {
  const { theme, themeMode } = useTheme()

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Jacob Zhang</title>
        <meta
          name="description"
          content="I'm Jacob Zhang, a student at Purdue University majoring in Computer Science with a graduation year of 2023."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
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
      <ThemeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </CacheProvider>
  )
}

export default MyApp
