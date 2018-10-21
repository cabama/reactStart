import { Avatar } from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Dispatch } from 'redux'
import { UserTypes } from '../../../Redux/Actions/UserActions'
import { IUserStore } from '../../../Redux/Store/userStore'

interface IState {
  anchorElement: HTMLElement | null,
}

type IProps = {
  history: any,
} & IStateToProps & IDispatchToProps

class AvatarComponent extends React.Component<IProps, IState> {

  constructor (props: IProps, state: IState) {
    super(props, state)
    this.state = { anchorElement: null }
  }

  public redirectProfile = () => {
    this.props.history.push('/profile', null)
    console.log('hitsoty', this.props.history)
  }

  public render () {
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
          <MenuItem onClick={() => this.redirectProfile()}>
            profile
          </MenuItem>
          <MenuItem onClick={this.props.dispatch.logout}>Log out</MenuItem>
        </Menu>
      </div>
    )
  }

  private showUser (): string {
    const user = this.props.state.user
    if (!user.login) return '-'
    else if (user.name) return user.name.charAt(0).toUpperCase()
    else if (user.email) return user.email.charAt(0).toUpperCase()
    else return '-'
  }

  private handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ anchorElement: event.currentTarget })
  }

  private handleCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ anchorElement: null })
  }

}

interface IStateToProps {
  state: {
    user: IUserStore,
  }
}

const mapStateToProps = (state: any): IStateToProps => {
  return {
    state: {
      user: state.user,
    },
  }
}

interface IDispatchToProps {
  dispatch: {
    logout: () => void,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    dispatch: {
      logout: () => dispatch({type: UserTypes.logout}),
    },
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AvatarComponent))
