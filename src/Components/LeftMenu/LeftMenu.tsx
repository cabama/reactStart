import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Money from '@material-ui/icons/AttachMoney'
import InboxIcon from '@material-ui/icons/Inbox'
import NoteAdd from '@material-ui/icons/NoteAdd'
import * as React from 'react'

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

export function LeftMenu(props: any) {
  return (
  <div className="LeftMenu">
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
  </div>
  )
}
