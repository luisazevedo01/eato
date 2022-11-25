import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { StyledCard } from './NewsCard.styles'

interface NewsCardProps {
  title: string
  thumbnail: string
}

/*
    <StyledCard>
      <h4>{title}</h4>
      <img width={100} height={100} src={thumbnail} />
    </StyledCard>

*/

const NewsCard = ({ title, thumbnail }: NewsCardProps) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={thumbnail}
          alt="new's image"
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  )
}

export default NewsCard
