'use client'

import { localesDef } from '@/config/locale'
import { useRouter } from '@/i18n'
import { styled, useTheme } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { HeaderButtonProps } from '../button'
import { useLocale } from 'next-intl'
import { fira, vazir } from '@/config/fonts'
import { useEffect, useState } from 'react'

interface Props extends HeaderButtonProps {
  onClose: () => void
  anchor: Element | null
  open: boolean
}

const LanguageMenuMenu = styled(Menu, { shouldForwardProp: prop => prop !== 'doesOverlap' })<HeaderButtonProps>(({ theme, doesOverlap }) => ({
  '& .MuiPaper-root': {
    background: theme.palette[doesOverlap ? 'secondary' : 'primary'].main,
    color: theme.palette[doesOverlap ? 'primary' : 'secondary'].main,
    minWidth: 110,
    zIndex: 15
  }
}))

const LanguageMenu: FC<Props> = ({ onClose, anchor, open, doesOverlap }) => {
  const { push, refresh } = useRouter()
  const currentLocale = useLocale()
  const theme = useTheme()
  const [mainEl, setMainEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!mainEl) setMainEl(document.getElementById('main'))
  }, [mainEl])

  return (
    <LanguageMenuMenu anchorEl={anchor} open={open} onClose={onClose} doesOverlap={doesOverlap}>
      {localesDef.map(({ name, locale, dir }, key) => (
        <MenuItem
          sx={{
            fontFamily: dir === 'rtl' ? vazir.style.fontFamily : fira.style.fontFamily
          }}
          key={key}
          onClick={() => {
            if (currentLocale !== locale) {
              document.getElementById('back-to-top')?.click()
              /* setState({ exiting: true })
              document.body.style.background = theme.palette.secondary.main */
              mainEl!.style.background = theme.palette.secondary.main
              setTimeout(() => {
                push('/', { locale })
                refresh()
              }, 500)
            }
          }}
        >
          {name}
        </MenuItem>
      ))}
    </LanguageMenuMenu>
  )
}

export default LanguageMenu
