'use client'

import { useTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'

const Intro = () => {
  const t = useTranslations('Intro')
  const theme = useTheme()

  return (
    <Stack spacing={4}>
      <Typography
        component="p"
        fontSize={{ xs: theme.direction === 'rtl' ? '1.2rem' : '1.1rem', md: theme.direction === 'rtl' ? '1.8rem' : '1.5rem' }}
        sx={{ wordSpacing: theme.direction === 'rtl' ? '0.1em' : '0.2em' }}
        lineHeight={{ xs: '2rem', md: '2.8rem' }}
        textAlign="justify"
        whiteSpace="collapse"
      >
        {t('intro')}
      </Typography>
    </Stack>
  )
}

export default Intro
