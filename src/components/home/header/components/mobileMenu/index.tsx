import Box from '@mui/material/Box'
import HeaderButton from '../button'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'

interface Props {
  onClick: MouseEventHandler
}

const MobileMenu: FC<Props> = ({ onClick }) => {
  const theme = useTheme()

  return (
    <Box sx={{ flexBasis: '80%', display: { xs: 'flex', md: 'none' } }}>
      <HeaderButton
        doesOverlap={false}
        onClick={onClick}
        sx={{ maxWidth: 10, ml: theme.direction === 'rtl' ? 0 : -3, mr: theme.direction === 'rtl' ? -3 : 0 }}
      >
        <MenuIcon />
      </HeaderButton>
    </Box>
  )
}

export default MobileMenu
