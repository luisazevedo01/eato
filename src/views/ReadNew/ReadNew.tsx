import { Grid, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { NewsArticle, useNewsContext } from '../../context/newsContext'
import {
  StyledArrowBack,
  StyledNewContainer,
  StyledReadNew,
} from './ReadNew.styles'

const ReadNew = () => {
  const { news } = useNewsContext()
  const navigate = useNavigate()
  const params = useParams()
  const newId = Number(params.id) 

  const targetedNew: NewsArticle = news[newId]

  return (
    <StyledReadNew>
      <StyledArrowBack onClick={() => navigate(-1)} fontSize='large' />
      <StyledNewContainer>
        <Grid display='flex' mb='5rem' justifyContent='center'>
          <img width='100%' src={targetedNew.urlToImage} />
        </Grid>
        <Typography variant='h2'>{targetedNew.title}</Typography>
        <br />
        <Typography variant='h6'>{targetedNew.description}</Typography>
        <Typography variant='h6'>{targetedNew.content}</Typography>
      </StyledNewContainer>
    </StyledReadNew>
  )
}

export default ReadNew
