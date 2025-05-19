'use client'

import { keyframes, styled } from '@mui/material/styles'
import heights from '../consts/height'
import { globalPadding } from '@/config/theme'

const appearAnimation = keyframes`
  from {
    opacity: 0;
    margin-top: -20px;
  }
  to {
    opacity: 1;
     margin-top: 0px;
  }
`

interface Props {
  height: number
  navOpen: boolean
}

const HeaderContainer = styled('div', {
  shouldForwardProp: prop => !['height', 'navOpen'].includes(prop as string)
})<Props>(({ theme, height, navOpen }) => ({
  position: 'fixed',
  display: 'flex',
  zIndex: 12,
  width: '100%',
  flexDirection: 'column-reverse',
  justifyContent: 'center',
  paddingTop: 50 - (heights.normal - height) / 2,
  background: theme.palette.secondary.main,
  boxShadow: height < 130 ? 'inset 0 -1px 2px 0 #382f2630, 0 -10px 20px -5px #220' : undefined,
  transition: `box-shadow 300ms, opacity 250ms`,
  paddingLeft: globalPadding.xs,
  paddingRight: globalPadding.xs,
  paddingBottom: navOpen ? 50 - (heights.normal - height) / 2.7 : 50 - (heights.normal - height) / 2,
  color: theme.palette.text.primary,
  '& *': {
    animation: `${appearAnimation} 600ms cubic-bezier(0,.78,0,1)`,
    color: 'inherit'
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: globalPadding.md,
    paddingRight: globalPadding.md,
    flexDirection: 'row'
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

export default HeaderContainer
