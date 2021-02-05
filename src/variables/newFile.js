import React from 'react'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,ThemeProvider } from '@material-ui/core/styles';
import CustomTheme from './assets/customTheme/CustomTheme'
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
   < StylesProvider jss={jss}>
      <ThemeProvider theme={CustomTheme}>
          <div>
          
          </div>
      </ThemeProvider>
   </StylesProvider>
   
  )

}

export default App
