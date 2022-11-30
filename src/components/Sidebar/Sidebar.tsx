import { Dashboard } from '@mui/icons-material'
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from '@mui/material'
import { Box } from '@mui/system'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import { useNavigate } from 'react-router-dom'
import { RoutesPath } from '../../RoutesPath'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <Paper elevation={1} sx={{ width: 360, height: '100vh' }}>
      <Box display='flex' flexDirection='column'>
        <List
          sx={{ width: '100%' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              EATO
            </ListSubheader>
          }
        >
          <ListItemButton
            sx={{ margin: 2 }}
            onClick={() => navigate(RoutesPath.DASHBOARD)}
          >
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItemButton>

          <ListItemButton
            sx={{ margin: 2 }}
            onClick={() => navigate(RoutesPath.NEWS)}>
            <ListItemIcon>
              <NewspaperIcon />
            </ListItemIcon>
            <ListItemText primary='News' />
          </ListItemButton>
        </List>
      </Box>
    </Paper>
  )
}

export default Sidebar
