import { Button, Input } from '@mui/material'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import NewsCard from '../../components/Card/NewsCard'
import { StyledNews, StyledNewsHeader } from './News.styles'

const api = 'https://newsapi.org/v2/everything?'
const from = '2022-11-24'

const url = (query: string) =>
  `${api}q=${query}&from=${from}sortBy=popularity&apiKey=${
    import.meta.env.VITE_API_KEY
  }`

interface Article {
  title: string
  urlToImage: string
  author: string
}

const News = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onSearch = async () => {

    if (query === '') return

    const res = await axios.get(url(query))

    const news: Article[] = res?.data.articles.map(
      (el: unknown) => el as Article
    )
    setArticles(news)
  }

  useEffect(() => {
    onSearch()
  }, [])

  return (
    <>
      <StyledNewsHeader>
        <Input
          value={query}
          ref={inputRef}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={onSearch}>search</Button>
      </StyledNewsHeader>
      <StyledNews>
        {articles.map(({ title, urlToImage }: Article, i) => {
          return (
            <NewsCard
              key={`article_${i}`}
              title={title}
              thumbnail={urlToImage}
            />
          )
        })}
      </StyledNews>
    </>
  )
}

export default News
