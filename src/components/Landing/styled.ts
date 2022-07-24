import { Container, styled, Box } from '@mui/material'
import emotionStyled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const arrow = keyframes`
  0% {
    bottom:0px;
  }
  100%{
    bottom:20px;
  }
`

const leftArrow = keyframes`
  0% {
  }
  100%{
    transform: translateX(-50%) rotate(225deg);
  }
`

const rightArrow = keyframes`
  0% {
  }
  100%{
    transform: translateX(-50%) rotate(-45deg);
  }
`

export const Arrow = emotionStyled.div`
  height:40px;
  position:absolute;
  left:50%;
  bottom:0px;
  transform: translateX(-50%);
  animation: ${arrow} 0.5s 1s infinite ease-out alternate;
`

export const LeftArrow = emotionStyled.div`
  position:absolute;
  height:2px;
  width:10px;
  background:black;
  transform: translateX(-50%) rotate(240deg);
  top:5px;
  left:50%;
  border-radius:3px;
  transform-origin:1px 50%;
  animation: ${leftArrow} 0.5s 1s infinite ease-out alternate;
`

export const RightArrow = emotionStyled.div`
  position:absolute;
  height:2px;
  width:10px;
  background:black;
  transform:translateX(-50%) rotate(-60deg);
  top:5px;
  left:50%;
  border-radius:3px;
  transform-origin:1px 50%;
  animation: ${rightArrow} 0.5s 1s infinite ease-out alternate;
`

export const Wrapper = styled(Container)({
  textAlign: 'center',
  height: '85vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const AnimatedWave = styled('span')({
  display: 'inline-block',

  '@keyframes wave': {
    '15%, 25%': {
      transform: 'rotate(-35deg)',
    },
    '0%, 10%, 20%, 30%': {
      transform: 'rotate(0deg)',
    },
  },

  animation: 'wave 3s linear 2s infinite',
})

export const AnimatedSmoke = styled('span')({
  display: 'inline-block',

  '@keyframes puff': {
    '60%, 100%': {
      opacity: 0,
      transform: 'translate(25px, 0)',
    },
    '0%': {
      opacity: 0,
    },
    '20%, 40%': {
      opacity: 1,
    },
  },

  animation: 'puff 2s linear 2s infinite',
})

export const AnimatedTrain = styled('span')({
  display: 'inline-block',
  opacity: 0,

  '@keyframes move': {
    '90%, 100%': {
      opacity: 0,
      transform: 'translate(-100px, 0)',
    },
    '0%': {
      opacity: 0,
      transform: 'translate(100px, 0)',
    },
    '20%, 80%': {
      opacity: 1,
    },
  },

  animation: 'move 8s linear 2s infinite',
})
