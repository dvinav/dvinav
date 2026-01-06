'use client'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded'
import theme from '@/config/theme'
import Link from 'next/link'
import { styled } from '@mui/material/styles'

export const dynamic = 'force-dynamic'

const SLink = styled(Link)({
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
  display: 'inline-flex',
  flexDirection: theme.direction === 'rtl' ? 'row' : 'row-reverse',
  alignItems: 'center',
  gap: '0.7rem',
  fontSize: '1.5rem',
  fontWeight: 400,
  mt: 8,
  cursor: 'pointer',
  '&::after': {
    position: 'absolute',
    content: '""',
    bottom: '-15px',
    width: '60%',
    height: '3px',
    borderRadius: 10,
    backgroundColor: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 500ms cubic-bezier(.17,.67,.24,.99)'
  }
})

const NotFound = () => (
  <Stack
    sx={{
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      justifyContent: 'center',
      background: '#EDE8D0',
      '& > *': {
        color: '#252120'
      }
    }}
  >
    <Typography fontSize="6rem" lineHeight="1" fontFamily="Fira Code">
      404
    </Typography>
    <Typography fontSize="2rem" fontFamily="Fira Code">
      Dvin's not here!
    </Typography>
    <SLink href="/en">
      Go back to Home
      <ArrowBackRounded sx={{ fontSize: '1.5rem' }} />
    </SLink>
  </Stack>
)

export default NotFound
