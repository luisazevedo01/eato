import { Card } from '@mui/material'
import styled from 'styled-components'

export const StyledCard = styled(Card)`
  width: 20%;
  margin: 12px;

  &:hover {
    transform: translate(0%, -4%);
    transition: 0.3s ease-out;
  }
`
