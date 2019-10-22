import React from 'react'
import { PrimaryBorder, GrayBorder } from './Styles'

const Frame = () => (
  <svg width="816" height="1056">
    <rect width="816" height="1056" fill="white" />
    <PrimaryBorder points="500,0 0,0 0,100" />
    <GrayBorder points="300,0 816,100, 816,0" />
    <PrimaryBorder points="816,1056 816,956 306,1056" />
    <GrayBorder points="516,1056 0,956 0,1056" />
  </svg>
)

export default Frame
