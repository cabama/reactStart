import { Avatar } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import * as React from 'react'
import { connect } from 'react-redux'

interface IState {
  anchorElement: HTMLElement | null,
}

class Profile extends React.Component<any, IState> {

  constructor(props: any, state: IState) {
    super(props, state)
    this.state = { anchorElement: null }
    this.handleOpenMenu.bind(this)
  }

  public render() {
    const open = Boolean(this.state.anchorElement) || false

    return (
      <div>
        <Avatar onClick={this.handleOpenMenu} style={{ backgroundColor: 'red' }}>{this.showUser()}</Avatar>
        <Menu
          id="menu-appbar"
          anchorEl={this.state.anchorElement || undefined}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          onClose={this.handleCloseMenu}
        >
          <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>My account</MenuItem>
        </Menu>
      </div>
    )
  }

  private showUser(): string {
    return this.props.user.login ? 'C' : '-'
  }

  private handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    debugger
    this.setState({ anchorElement: event.currentTarget })
  }

  private handleCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ anchorElement: null })
  }

}

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  }
}

export default connect(
  mapStateToProps,
)(Profile)
