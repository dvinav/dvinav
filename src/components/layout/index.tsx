'use client'

import theme from '@/config/theme'
import { createTheme, Direction, ThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import globalStyles from './consts/globalStyles'
import { Toaster } from 'sonner'
import { useLocale } from 'next-intl'
import { dirs } from '@/config/locale'
import Main from './components/main'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import BackToTop from './components/backToTop'

interface Props {
  dir: Direction
}

const AppLayout: LC<Props> = ({ children, dir }) => {
  const locale = useLocale()
  const direction = dirs[locale]
  const isRtl = direction === 'rtl'

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={createTheme({ ...theme, direction: dir })} defaultMode="system">
        <Toaster richColors closeButton style={{ fontFamily: 'inherit' }} position={isRtl ? 'bottom-left' : 'bottom-right'} dir={direction} />
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Main id="main">
          <BackToTop />
          {children}
        </Main>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default AppLayout
