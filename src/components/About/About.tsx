import { Container, styled, Typography } from '@mui/material'
import { Twemoji } from 'react-emoji-render'
import { EmojiIcon } from '@/components/EmojiIcon'

export const Wrapper = styled(Container)({
  height: '100vh',
})

const About = () => {
  return (
    <Wrapper sx={{ pt: 3 }} maxWidth="md">
      <Typography variant="h2" textAlign="center">
        About
      </Typography>
      <Typography variant="body1" sx={{ mt: 3.5 }}>
        <Twemoji text="I'm a student majoring in Computer Science 💻 at Purdue University 🌽🚂 with a graduation year of 2023 🎓" />
      </Typography>
      <Typography variant="body1">
        I&apos;m a fullstack web developer using the
        <EmojiIcon alt="MongoDB" src="/images/icons/mongodb.png" />
        <EmojiIcon alt="Express.js" src="/images/icons/expressjs.png" />
        <EmojiIcon alt="React.js" src="/images/icons/react.png" />
        <EmojiIcon alt="Node.js" src="/images/icons/nodejs.png" /> stack
      </Typography>
    </Wrapper>
  )
}

export default About
