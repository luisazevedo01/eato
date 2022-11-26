import { createTheme } from '@mui/material'
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

        <NewsContext.Provider value={{ news, setNews }}>
          <Routes>
            <Route path='/' element={<News />} />

            <Route path='/read-news:id' element={<ReadNew />} />
          </Routes>
        </NewsContext.Provider>
    </ThemeProvider>
  )
}

export default App
