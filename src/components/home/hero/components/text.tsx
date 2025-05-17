'use client'

import useUI from '@/hooks//useUI'
import Stack from '@mui/material/Stack'
import { keyframes } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const About: FC = () => {
  const t = useTranslations('Hero')
  const { exiting } = useUI()

  return (
    <Stack
      sx={{
        pt: { md: 20 },
        flexGrow: 1,
        flexBasis: '50%',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 250ms ease',
        animation: `${appearAnimation} 250ms`
      }}
    >
      <Typography component="h1" fontSize={{ xs: '1.6rem', md: '2rem', xl: '3rem' }} fontWeight="500" color="text.primary">
        {t('heading')}
      </Typography>
      <Typography fontSize={{ xs: '1.2rem', md: '1.7rem', xl: '2rem' }} textAlign="justify" mt={3} color="text.primary">
        {t('subheading')}
      </Typography>
    </Stack>
  )
}

export default About
