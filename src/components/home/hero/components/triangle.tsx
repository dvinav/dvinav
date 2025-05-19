'use client'

import { styled } from '@mui/material/styles'

const Svg = styled('svg')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 7,
  transform: 'scaleY(1.01)',
  '& *': {
    fill: '#252120'
  }
})

const Triangle = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1145 80">
    <g>
      <polygon points="0 80 1145 80 1145 0 0 80" />
    </g>
  </Svg>
)

export default Triangle
