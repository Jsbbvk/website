import { Twemoji } from 'react-emoji-render'
import { Fade, Stack, Typography, Box } from '@mui/material'
import Image from 'next/image'
import profilePic from '../../../public/profile.jpg'
import {
  Wrapper,
  AnimatedSmoke,
  AnimatedWave,
  AnimatedTrain,
  Arrow,
  LeftArrow,
  RightArrow,
} from './styled'

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
            <Typography sx={{ mt: 2 }}>cs @ purdue &apos;23</Typography>

            <Typography>
              <AnimatedTrain>
                <Twemoji text="🚂" />
                <AnimatedSmoke>
                  <Twemoji text="💨" />
                </AnimatedSmoke>
              </AnimatedTrain>
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <Arrow>
            <LeftArrow />
            <RightArrow />
          </Arrow>
        </Box>
      </Wrapper>
    </Fade>
  )
}

export default Landing
