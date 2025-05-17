'use client'

import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ArrowBackRounded from '@mui/icons-material/ArrowBackRounded'
import type { CSSProperties } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { useRouter } from '@/i18n'

const NotFound = () => {
  const [exiting, setExiting] = useState(false)
  const locale = useLocale()
  const theme = useTheme()
  const t = useTranslations('NotFound')
  const { push } = useRouter()

  const commonProps: CSSProperties = {
    position: 'relative',
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-flex',
    flexDirection: theme.direction === 'rtl' ? 'row-reverse' : 'row',
    alignItems: 'center',
    gap: '0.7rem',
    fontSize: '1.5rem',
    fontWeight: 400,
    mt: 8,
    cursor: 'pointer'
  }

  const handleClick = () => {
    setExiting(true)
    setTimeout(() => push('/'), 300)
  }

  const LinkElements = () => (
    <>
      {t('getBackHome')}
      <ArrowBackRounded sx={{ fontSize: '1.5rem', transform: theme.direction === 'rtl' ? 'rotate(180deg)' : undefined }} />
    </>
  )

  return (
    <Stack
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100%',
        background: theme.palette.secondary.main,
        '& > *': {
          opacity: exiting ? 0 : 1,
          transition: 'opacity 300ms'
        }
      }}
    >
      <Typography fontSize="6rem" lineHeight="1">
        {Number(404).toLocaleString(locale)}
      </Typography>
      <Typography fontSize="2rem">{t('dvinsNotHere')}</Typography>
      <Link
        onClick={handleClick}
        sx={{
          ...commonProps,
          '&::after': {
            position: 'absolute',
            content: '""',
            bottom: '-10px',
            left: '20%',
            width: '60%',
            height: '3px',
            borderRadius: 10,
            backgroundColor: 'currentColor',
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 300ms cubic-bezier(.17,.67,.24,.99)'
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
            transformOrigin: 'center'
          },
          '@media (hover: none) and (pointer: coarse)': {
            display: 'none'
          }
        }}
      >
        <LinkElements />
      </Link>
      <Button
        onClick={handleClick}
        sx={{
          ...commonProps,
          '@media (hover: hover) and (pointer: fine)': {
            display: 'none'
          }
        }}
      >
        <LinkElements />
      </Button>
    </Stack>
  )
}

export default NotFound
