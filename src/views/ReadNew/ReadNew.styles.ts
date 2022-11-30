import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box } from '@mui/system'
import styled from 'styled-components'

export const StyledArrowBack = styled(ArrowBackIcon)`
  position: absolute;
  left: 16px;
  top: 16px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`

export const StyledReadNew = styled(Box)`
  position: relative;
  height: 100vh;
  overflow: hidden;
`

export const StyledNewContainer = styled(Box)`
  padding: 0 5rem 5rem 5rem;
  overflow: scroll;
  height: 100%;
`
