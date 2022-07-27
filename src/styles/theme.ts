import { useMediaQuery } from '@mui/material'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { useMemo, useState } from 'react'

export const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [mode, setMode] = useState<'light' | 'dark' | undefined>()

  const themeMode = useMemo(
    () => ({
      toggleTheme: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          components: {
            MuiButtonBase: {
              defaultProps: {
                disableRipple: true,
              },
            },
            MuiCssBaseline: {
              styleOverrides: {
                body: {
                  transition:
                    'background-color 250ms ease-in-out, color 250ms ease-in-out',
                },
              },
            },
          },
          typography: {
            button: { textTransform: 'none' },
            fontFamily: '"QuickSand", sans-serif',
          },
          palette: {
            mode: (() => {
              if (!mode) return prefersDarkMode ? 'dark' : 'light'
              return mode
            })(),
          },
        })
      ),
    [mode, prefersDarkMode]
  )

  return { theme, themeMode }
}
