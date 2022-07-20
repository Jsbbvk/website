import { Container, Fade, styled, Typography } from '@mui/material'

const Wrapper = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}))

const Landing = () => {
  return (
    <Fade in timeout={1000}>
      <Wrapper>
        <Typography variant="h2">I&apos;m Jacob Zhang 👋</Typography>
        <Typography sx={{ mt: 2, pb: 5 }}>Welcome to my website</Typography>
      </Wrapper>
    </Fade>
  )
}

export default Landing
