import { createContext, useContext } from 'react'

export const ThemeContext = createContext({ toggleTheme: () => {} })

export const useThemeContext = () => useContext(ThemeContext)
