import React from 'react'
import styled from 'styled-components'
import { createHtml } from '../Utils'
import header from './header.md'

const StyledHeader = styled.header`
  padding-top: 32px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin: 4px 0;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader dangerouslySetInnerHTML={createHtml(header)} />
)

export default Header
