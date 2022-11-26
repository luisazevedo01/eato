import { createContext, useContext } from 'react'

export interface NewsArticle {
  title: string
  urlToImage: string
  author: string
  content: string
  description: string
  publishedAt: string
  source: string
  url: string
}

interface NewsContextStateT {
  news: Array<NewsArticle>
  setNews: React.Dispatch<React.SetStateAction<Array<NewsArticle>>>
}

const initialState: NewsContextStateT = {
  news: [],
  setNews: () => {},
}

export const NewsContext = createContext<NewsContextStateT>(initialState)

export const useNewsContext = () => {
  const context = useContext<NewsContextStateT>(NewsContext)

  if (context) return context

  throw new Error('Missing correct context')
}
