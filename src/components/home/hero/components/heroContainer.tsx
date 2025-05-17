'use client'

import heights from '@/components/home/header/consts/height'
import { globalPadding } from '@/config/theme'
import { styled } from '@mui/material'

const HeroContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: heights.normal + 40,
  gap: theme.spacing(4),
  position: 'relative',
  width: '100%',
  zIndex: 5,
  paddingLeft: globalPadding.xs,
  paddingRight: globalPadding.xs,
  background: theme.palette.secondary.main,
  height: 460 + heights.normal,
  transition: 'opacity 300ms',
  flexDirection: 'column-reverse',
  [theme.breakpoints.up('md')]: {
    paddingLeft: globalPadding.md,
    paddingRight: globalPadding.md,
    height: 700 + heights.normal,
    flexDirection: 'row-reverse',
    paddingTop: heights.normal + 80
  },
  [theme.breakpoints.up('lg')]: {
    paddingLeft: globalPadding.lg,
    paddingRight: globalPadding.lg
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: globalPadding.xl,
    paddingRight: globalPadding.xl
  }
}))

export default HeroContainer
