import { Twemoji } from 'react-emoji-render'
import { Box, Fade, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import profilePic from '/public/images/profile.jpg'
import { Wrapper, AnimatedSmoke, AnimatedWave, AnimatedTrain } from './styled'
import { EmojiIcon } from '@/components/EmojiIcon'

const Landing = () => {
  return (
    <Fade in timeout={1000}>
      <Wrapper>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 5, sm: 3, md: 8 }}
        >
          <Image
            src={profilePic}
            alt="profile"
            width={275}
            height={275}
            priority
            quality={100}
            placeholder="blur"
            style={{ borderRadius: '50%', overflow: 'hidden' }}
          />
          <Stack>
            <Typography variant="h3">
              I&apos;m Jacob Zhang{' '}
              <AnimatedWave>
                <Twemoji text="👋" />
              </AnimatedWave>
            </Typography>

            <Stack mt={2} flexDirection="row" justifyContent="center">
              <Typography>fullstack web dev</Typography>
              <Box>
                <EmojiIcon alt="MongoDB" src="/images/icons/mongodb.png" />
                <EmojiIcon alt="Express.js" src="/images/icons/expressjs.png" />
                <EmojiIcon alt="React.js" src="/images/icons/react.png" />
                <EmojiIcon alt="Node.js" src="/images/icons/nodejs.png" />
                <EmojiIcon alt="MUI" src="/images/icons/mui.png" />
              </Box>
            </Stack>

            <Typography sx={{ mt: 1 }}>
              cs @ purdue &apos;23{' '}
              <EmojiIcon
                alt="Purdue"
                src="/images/icons/purdue.png"
                width="22px"
                height="auto"
                verticalAlign="0"
              />
            </Typography>

            <Typography sx={{ mt: 0.5 }}>
              <AnimatedTrain>
                <Twemoji text="🚂" />
                <AnimatedSmoke>
                  <Twemoji text="💨" />
                </AnimatedSmoke>
              </AnimatedTrain>
            </Typography>

            <Stack
              mt={4}
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <a
                href="https://github.com/Jsbbvk"
                target="_blank"
                rel="noreferrer"
                title="Github"
              >
                <EmojiIcon
                  alt="Github"
                  src="/images/icons/github.png"
                  height="20px"
                  width="20px"
                />
              </a>
              <a
                href="https://linkedin.com/in/jacobzhang132"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <EmojiIcon
                  alt="LinkedIn"
                  src="/images/icons/linkedin.png"
                  height="20px"
                  width="20px"
                />
              </a>
              <a
                href="https://www.instagram.com/jacobzzzzzzzzzz"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <EmojiIcon
                  alt="Instagram"
                  src="/images/icons/instagram.png"
                  height="20px"
                  width="20px"
                />
              </a>
              <a
                href="mailto:jacobzhang132@gmail.com"
                title="Gmail"
                target="_blank"
                rel="noreferrer"
              >
                <EmojiIcon
                  alt="Gmail"
                  src="/images/icons/gmail.png"
                  height="20px"
                  width="20px"
                />
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Wrapper>
    </Fade>
  )
}

export default Landing
