import { fira, vazir } from '@/config/fonts'

const globalStyles = {
  '*': { boxSizing: 'border-box', WebkitTapHighlightColor: 'transparent', userSelect: 'none' },
  'html, body': {
    height: '100%',
    width: '100vw',
    margin: 0,
    padding: 0,
    paddingTop: 'env(safe-area-inset-top)',
    overflow: 'hidden',
    fontFamily: fira.style.fontFamily,
    transition: 'background 250ms ease'
  },
  a: { color: 'inherit', textDecoration: 'none' },
  '::-webkit-scrollbar': { width: '0', background: '#252120' },
  '::-webkit-scrollbar-thumb': { backgroundColor: '#EDE8D0', border: '3px solid #252120', borderRadius: '10px' },
  '::-webkit-scrollbar-track': { background: '#0000' },
  ':lang(fa) *': { fontFamily: vazir.style.fontFamily }
}

export default globalStyles
