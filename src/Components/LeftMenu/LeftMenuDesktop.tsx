import { Drawer } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Money from '@material-ui/icons/AttachMoney'
import InboxIcon from '@material-ui/icons/Inbox'
import NoteAdd from '@material-ui/icons/NoteAdd'
import * as React from 'react'

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

const menuElements = [
  { title: 'Main', icon: InboxIcon },
  { title: 'Notes', icon: NoteAdd },
  { title: 'Billing', icon: Money },
]

const elementList = (title: string, icon: React.ComponentType) => (
  <ListItem button={true}>
    <ListItemIcon>
      {React.createElement(icon)}
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
)

export function DrawerMenu(props: any) {

  const { classes } = props

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <List component="nav">
        {menuElements.map((element) => elementList(element.title, element.icon))}
      </List>
      <Divider />
      <List component="nav">
        <ListItem button={true}>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button={true} component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export const LeftMenuDesktop = withStyles(styles as any)(DrawerMenu)
