import { useThemeContext } from '@/context/ThemeContext'
import { styled, Box, useTheme } from '@mui/material'
import { EmojiIcon } from '@/components/EmojiIcon'

const Wrapper = styled(Box)({
  position: 'absolute',
  top: 32,
  right: 20,
  transition: 'transform 0.25s ease',

  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(0.94)',
  },
})

export const ToggleTheme = () => {
  const { toggleTheme } = useThemeContext()
  const {
    palette: { mode },
  } = useTheme()

  return (
    <Wrapper onClick={toggleTheme}>
      <EmojiIcon
        alt={`${mode}-mode`}
        title={`${mode === 'light' ? 'Light' : 'Dark'} mode`}
        src={`/images/icons/${mode === 'dark' ? 'sun' : 'moon'}.png`}
        height="32px"
        width="32px"
      />
    </Wrapper>
  )
}
