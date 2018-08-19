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

const drawerWidth = 240

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

const menuElements = [
  { title: 'Profile', icon: InboxIcon },
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

class DrawerMenuResposive extends React.Component<any, any> {

  constructor(props: any, state: any) {
    super(props)
    this.state = { mobileOpen: true}
  }

  public render() {
    const { classes, theme } = this.props
    return (
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={this.state.mobileOpen}
        onClose={this.handleDrawerToggle}
        classes={{ paper: classes.drawerPaper}}
        ModalProps={{ keepMounted: true }}
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

  private handleDrawerToggle = () => {
    this.setState((state: any) => ({ mobileOpen: !state.mobileOpen }))
  }
}

export const LeftMenuResposive = withStyles(styles as any, { withTheme: true })(DrawerMenuResposive)
