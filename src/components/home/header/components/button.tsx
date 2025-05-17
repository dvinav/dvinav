'use client'

import Button from '@mui/material/Button'
import { styled, SxProps, useTheme } from '@mui/material/styles'

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingLeft: theme.direction === 'rtl' ? theme.spacing(4, 12, 20, 28) : undefined,
  paddingRight: theme.direction !== 'rtl' ? theme.spacing(4, 12, 20, 28) : undefined
}))

export interface HeaderButtonProps {
  doesOverlap: boolean
  onClick?: MouseEventHandler
  sx?: SxProps
}

const HeaderButton: LC<HeaderButtonProps> = ({ children, onClick, doesOverlap, sx }) => {
  const theme = useTheme()

  return (
    <Container>
      <Button
        variant="text"
        sx={{
          display: 'flex',
          color: theme.palette[doesOverlap ? 'secondary' : 'primary'].main,
          '& .MuiSvgIcon-root': {
            opacity: 0.8
          },
          ...sx
        }}
        onClick={onClick}
      >
        {children}
      </Button>
    </Container>
  )
}

export default HeaderButton
