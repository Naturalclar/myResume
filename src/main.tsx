import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import './styles.css'
import App from './components/App'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather|Open+Sans');
  * {
    box-sizing: border-box;
  }

  body {
    background: azure;
    font-family: 'Merriweather', serif;
    margin: 0;
    padding: 0;
  }
`

createRoot(document.getElementById('app')!).render(
  <>
    <GlobalStyle />
    <App />
  </>
)
