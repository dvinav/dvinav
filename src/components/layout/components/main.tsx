'use client'

import { styled } from '@mui/material/styles'

const Main = styled('div')(({ theme }) => ({
  position: 'fixed',
  width: '100vw',
  overflow: 'auto',
  overflowX: 'hidden',
  height: '100%',
  background: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overscrollBehavior: 'none',
  maxHeight: '100%',
  transition: 'opacity 300ms'
}))

export default Main
