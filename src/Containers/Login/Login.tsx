import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { UserTypes } from '../../Redux/Actions/UserActions'
import { CardStyle, ContainerStyle } from './LoginStyle'

interface IProps extends  IDispatchProps, IStateToProps {
  state: { user: any }
  dispatch: { loginWithEmail: (email: string, password: string) => void }
  history: { push: (url: string) => void },
}

interface IState {
  username: string
  password: string
}

export class LoginPage extends React.Component<IProps, IState> {
  public constructor(props: IProps, state: IState) {
    super(props, state)
    this.state = {
      username: '',
      password: '',
    }
  }

  public login = () => {
    console.log('user', this.state.username)
    console.log('password', this.state.password)
    this.props.dispatch.loginWithEmail(this.state.username, this.state.password)
  }

  public render() {
    if (this.props.state.user.singIn === true) this.props.history.push('/')
    return (
      <div className={ContainerStyle}>
        <Card className={CardStyle}>
          <CardHeader title="LOGIN"/>
          <CardContent>
            <Grid
              container={true}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={24}
            >
              <Grid item={true} xs={6} style={{ width: '100%' }}>
                <TextField
                  id="standard-name"
                  label="Name"
                  value={this.state.username}
                  onChange={(event) => this.setState({ username: event.target.value })}
                  margin="normal"
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item={true} xs={6} style={{ width: '100%' }}>
                <TextField
                  id="standard-name"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={(event) => this.setState({ password: event.target.value })}
                  margin="normal"
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions style={{ justifyContent: 'space-around' }}>
            <Button color="primary" onClick={() => this.login()}>Login</Button>
          </CardActions>
        </Card>
        {JSON.stringify(this.props.state.user)}
      </div>
    )
  }
}

interface  IStateToProps {
  state: { user: any },
}

const mapStateToProps: (state: any) => IStateToProps = (state: any) => {
  return {
    state: {
      user: state.user,
    },
  }
}

interface IDispatchProps {
  dispatch: {
    loginWithEmail: ((email: string, password: string) => any),
  },
}

const mapDispatchToProps: (dispatch: any) => IDispatchProps = (dispatch: any) => {
  return {
    dispatch: {
      loginWithEmail: (email: string, password: string) =>
        dispatch({
          type: UserTypes.loginEmail,
          action: {
            email,
            password,
            dispatch,
          },
        }),
    },
  }
}

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)
