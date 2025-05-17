import type { ThemeOptions } from '@mui/material/'

export const themeColor = '#ede8d0'

export const globalPadding = {
  xs: '32px',
  md: '96px',
  lg: '160px',
  xl: '208px'
}

const theme: ThemeOptions = {
  typography: {
    fontFamily: 'inherit'
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: 'color 200ms ease'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        color: 'secondary'
      },
      styleOverrides: {
        root: {
          fontFamily: 'inherit'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit'
        }
      },
      defaultProps: {
        color: 'secondary'
      }
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  palette: {
    background: {
      default: '#EDE8D0'
    },
    text: {
      primary: '#403633'
    },
    secondary: {
      main: '#EDE8D0'
    },
    primary: {
      main: '#252120'
    }
  }
}

export default theme
