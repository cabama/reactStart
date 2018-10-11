import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import * as React from 'react'
import AvatarComponent from './AvatarComponent/AvatarComponent'

const styles = {
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
}

export function MenuBar(props: any) {
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu"><MenuIcon /></IconButton>
          <Typography variant="title" color="inherit" style={{flexGrow: 1}}> ReshuHormiguero </Typography>
          <AvatarComponent/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(MenuBar)
