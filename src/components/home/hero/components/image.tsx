'use client'

import Box from '@mui/material/Box'
import Image from 'next/image'
import { keyframes, useTheme } from '@mui/material/styles'
import { useEffect, useRef, useState } from 'react'
import useUI from '@/hooks//useUI'

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Dvin: FC = () => {
  const theme = useTheme()
  const [top, setTop] = useState(0)
  const { exiting } = useUI()

  const mainRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    mainRef.current = document.getElementById('main')

    const handleScroll = () => {
      if (!mainRef.current) return
      setTop(Math.floor(mainRef.current.scrollTop / 3))
    }

    mainRef.current?.addEventListener('scroll', handleScroll)

    return () => {
      mainRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      sx={{
        position: 'relative',
        minWidth: { xs: 200, md: 400 },
        flexGrow: 0,
        flexBasis: { xs: 'initial', md: '40%' },
        minHeight: { xs: 350, md: 600 },
        transition: 'opacity 200ms ease',
        transform: `translateY(${top}px)`,
        zIndex: 1,
        '& > img': {
          zIndex: 1
        },
        opacity: exiting ? 0 : 1,
        animation: `${appearAnimation} 250ms`
      }}
    >
      <Image
        src={`/images/dvin${theme.direction === 'rtl' ? '_rtl' : ''}.webp`}
        alt="Dvin with sunglasses"
        fill
        // no blur data because ew
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: 'contain'
        }}
      />
    </Box>
  )
}

export default Dvin
