import { Box, createTheme, Grid } from '@mui/material'
import { ThemeProvider } from '@mui/system'

import { Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import News from './views/News/News'
import ReadNew from './views/ReadNew/ReadNew'
import { NewsArticle, NewsContext } from './context/newsContext'
import { useState } from 'react'
import Dashboard from './views/Dashboard/Dashboard'
import Sidebar from './components/Sidebar/Sidebar'
import { RoutesPath } from './RoutesPath'

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

        <Sidebar/>

        <NewsContext.Provider value={{ news, setNews }}>

          <Box width="100%">

            <Routes>

              <Route path={RoutesPath.DASHBOARD} element={<Dashboard/>} />

              <Route path={RoutesPath.NEWS} element={<News />} />

              <Route path={RoutesPath.DYNAMIC_READ_NEW} element={<ReadNew />} />

            </Routes>

          </Box>

        </NewsContext.Provider>

      </Grid>

    </ThemeProvider>
  )
}

export default App
