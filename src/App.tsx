import { Box, createTheme, Grid, Paper } from '@mui/material'
import { ThemeProvider } from '@mui/system'

import { Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import News from './views/News/News'
import ReadNew from './views/ReadNew/ReadNew'
import { NewsArticle, NewsContext } from './context/newsContext'
import { useState } from 'react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [news, setNews] = useState<NewsArticle[]>([])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid display='flex'>
        <Paper sx={{ width: '300px', height: '100vh' }}>
          <Box display='flex' flexDirection='column'>
            <h1>lorem</h1>
            <h1>lorem</h1>
          </Box>
        </Paper>

        <NewsContext.Provider value={{ news, setNews }}>
          <Box width="100%">
            <Routes>
              <Route path='/' element={<News />} />

              <Route path='/read-news:id' element={<ReadNew />} />
            </Routes>
          </Box>
        </NewsContext.Provider>
      </Grid>
    </ThemeProvider>
  )
}

export default App
