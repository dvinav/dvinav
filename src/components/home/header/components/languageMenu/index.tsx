'use client'

import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded'
import Language from '@mui/icons-material/Language'
import { useState } from 'react'
import LanguageMenu from './menu'
import HeaderButton, { HeaderButtonProps } from '../button'
import { useTheme } from '@mui/material/styles'

const LanguageButton: FC<HeaderButtonProps> = ({ doesOverlap }) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  const open = Boolean(anchor)
  const theme = useTheme()

  const handleClick: MouseEventHandler = e => {
    setAnchor(e.currentTarget as HTMLElement)
  }
  const handleClose = () => {
    setAnchor(null)
  }

  return (
    <>
      <HeaderButton
        onClick={handleClick}
        doesOverlap={doesOverlap}
        sx={{ maxWidth: 10, ml: theme.direction === 'rtl' ? -10 : 0, mr: theme.direction === 'rtl' ? 0 : -10 }}
      >
        <ArrowDropDownRounded />
        <Language sx={{ fontSize: '1.3rem' }} />
      </HeaderButton>
      <LanguageMenu doesOverlap={doesOverlap} onClose={handleClose} open={open} anchor={anchor} />
    </>
  )
}

export default LanguageButton
