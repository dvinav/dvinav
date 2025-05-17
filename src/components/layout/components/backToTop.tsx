import Fab from '@mui/material/Fab'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [show, setShow] = useState(false)
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (document.getElementById('main')) setMainEl(document.getElementById('main'))

    const handleScroll = () => setShow(mainEl!.scrollTop! > 500)

    mainEl?.addEventListener('scroll', handleScroll)

    return () => {
      mainEl?.removeEventListener('scroll', handleScroll)
    }
  }, [mainEl])

  const scrollToTop = () => {
    const start = mainEl!.scrollTop!
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / 1000, 1)
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2
      mainEl?.scrollTo(0, start * (1 - ease))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return (
    <Fab
      id="back-to-top"
      color="secondary"
      sx={theme => ({
        position: 'fixed',
        bottom: 32,
        right: theme.direction === 'rtl' ? undefined : 32,
        left: theme.direction === 'rtl' ? 32 : undefined,
        opacity: show ? 1 : 0,
        transition: 'opacity 300ms',
        pointerEvents: show ? 'all' : 'none'
      })}
      onClick={scrollToTop}
    >
      <ArrowUpwardRoundedIcon />
    </Fab>
  )
}

export default BackToTop
