import { Grid, Typography } from '@mui/material'
import {
  useNavigate,
  useParams,
} from 'react-router-dom'
import { NewsArticle, useNewsContext } from '../../context/newsContext'
import { StyledArrowBack } from './ReadNew.styles'

const ReadNew = () => {
  const { news } = useNewsContext()
  const navigate = useNavigate()
  const params = useParams()

  const target = Number(params.id?.split('')[1])

  const targetedNew: NewsArticle = news[target]

  return (
    <>
      <StyledArrowBack onClick={() => navigate(-1)} fontSize='large' />
      <Grid m='0 8% 8% 8%'>
        <Grid display='flex' mb='5rem' justifyContent='center'>
          <img width='100%' src={targetedNew.urlToImage} />
        </Grid>
        <Typography variant='h2'>{targetedNew.title}</Typography>
        <br />
        <Typography variant='h6'>{targetedNew.description}</Typography>
        <Typography variant='h6'>{targetedNew.content}</Typography>
      </Grid>
    </>
  )
}

export default ReadNew
