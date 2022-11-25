import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/system'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import News from './views/News/News'
import ReadNew from './views/ReadNew/ReadNew'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<News />} />

          <Route path='/read_new' element={<ReadNew/>} />

        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
