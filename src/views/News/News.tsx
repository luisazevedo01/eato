import { Box, TextField } from '@mui/material'
import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NewsCard from '../../components/Card/NewsCard'
import { NewsArticle, useNewsContext } from '../../context/newsContext'
import { StyledNews, StyledNewsPage } from './News.styles'

const api = 'https://newsapi.org/v2/everything?'
const from = '2022-11-24'

const url = (query: string) =>
  `${api}q=${query}&from=${from}sortBy=popularity&apiKey=${
    import.meta.env.VITE_API_KEY
  }`

const News = () => {
  const [query, setQuery] = useState('')
  const { news, setNews } = useNewsContext()

  const navigate = useNavigate()

  const fetchNewsArticles = async (newsQuery: string) => {
    const res = await axios.get(url(newsQuery))

    const news: NewsArticle[] = res?.data.articles.map(
      (el: unknown) => el as NewsArticle
    )
    setNews(news)
  }

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (query === '') return

    fetchNewsArticles(query)

    localStorage.setItem('query', query)
  }

  useEffect(() => {
    const cachedQuery = localStorage.getItem('query')
    if (cachedQuery) {
      setQuery(cachedQuery)
    }
    fetchNewsArticles(cachedQuery ? cachedQuery : query)
  }, [])

  return (
    <StyledNewsPage>
      <Box
        component='form'
        onSubmit={onSearch}
        display='flex'
        justifyContent='center'
        noValidate
        autoComplete='off'
      >
        <TextField
          type='string'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Box>
      <StyledNews>
        {news.map(({ title, urlToImage }: NewsArticle, i) => {
          return (
            <NewsCard
              key={`article_${i}`}
              title={title}
              thumbnail={urlToImage}
              onClick={() => navigate(`read-news:${i}`)}
            />
          )
        })}
      </StyledNews>
    </StyledNewsPage>
  )
}

export default News
