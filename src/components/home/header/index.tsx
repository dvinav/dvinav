'use client'

import { useEffect, useRef, useState } from 'react'
import { Box, useTheme } from '@mui/material'
import useUI from '@/hooks/useUI'
import Links from './components/links'
import LanguageMenu from './components/languageMenu'
import HeaderContainer from './components/headerContainer'
import MobileMenu from './components/mobileMenu'
import heights from './consts/height'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [height, setHeight] = useState(heights.normal)
  const [doesOverlap, setDoesOverlap] = useState(false)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const exiting = useUI(s => s.exiting)
  const theme = useTheme()

  useEffect(() => {
    const headerEl = headerRef.current
    const heroEl = document.getElementById('hero')
    const mainEl = document.getElementById('main')
    const meta = document.querySelector('meta[name="theme-color"]')

    const checkOverlap = () => {
      if (!headerEl || !heroEl) return
      const headerBottom = headerEl.getBoundingClientRect().bottom
      const heroBottom = heroEl.getBoundingClientRect().bottom - heights.normal
      setDoesOverlap(headerBottom > heroBottom)
      if (headerBottom > heroBottom) {
        document.body.style.background = theme.palette.primary.main
        meta?.setAttribute('content', theme.palette.primary.main)
      } else {
        meta?.setAttribute('content', theme.palette.secondary.main)
        document.body.style.background = theme.palette.secondary.main
      }
    }

    const handleScroll = () => {
      setHeight(Math.max(70, heights.normal - (mainEl?.scrollTop || 0)))
      checkOverlap()
    }

    mainEl?.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkOverlap)
    checkOverlap()

    return () => {
      mainEl?.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkOverlap)
    }
  })

  return (
    <HeaderContainer ref={headerRef} height={height} doesOverlap={doesOverlap} navOpen={navOpen} sx={{ opacity: exiting ? 0 : 1 }}>
      <Box
        sx={{
          height: { xs: navOpen ? heights.linksNormal : 0, md: 'initial' },
          overflow: 'hidden',
          display: 'flex',
          transition: 'height 500ms cubic-bezier(.17,.67,.16,.99)'
        }}
      >
        <Links navOpen={navOpen} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: { xs: 'center' },
          justifyContent: { md: 'flex-end' },
          flex: { xs: 0, md: 1 }
        }}
      >
        <MobileMenu onClick={() => setNavOpen(v => !v)} />
        <LanguageMenu doesOverlap={doesOverlap} />
      </Box>
    </HeaderContainer>
  )
}

export default Header
