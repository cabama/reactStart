import { Grid } from '@material-ui/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, RouteProps } from 'react-router'
import { Route } from 'react-router-dom'
import { Login } from '../../Containers/Login/Login'
import { MainPageContainer } from '../../Containers/Main/Main'
import { SignIn } from '../../Containers/SignIn/SignIn'
import { UserTypes } from '../../Redux/Actions/UserActions'
import { IUserStore } from '../../Redux/Store/userStore'

interface IPrivateRouteProps extends RouteProps {
  isAuth: boolean
  redirectComponent: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  privateComponent: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

const PrivateRoute = (props: IPrivateRouteProps) => {
  const routeProps = {...props}
  const component = props.isAuth
  ? props.privateComponent
  : props.redirectComponent
  routeProps.component = component
  return <Route path={props.path} component={component}/>
}

const Topics = () => (
  <div>Topics</div>
)

const Private = () => (
  <div>Estas en una ruta privada</div>
)

type MainViewComponentProps = IStateToProps & IDispatchProps

export class MainViewComponent extends React.Component<MainViewComponentProps> {

  constructor(props: MainViewComponentProps, context: any) {
    super(props, context)
  }

  public componentDidMount() {
    this.props.dispatch.loginWithToken()
  }

  public render() {
    const isAuth = this.props.state.user.login
    return (
      <Grid item={true} xs={12} sm={12} md={12}>
          <div>
            <Route exact={true} path="/" component={MainPageContainer} />
            {/* <PrivateRoute path="/about" component={About} indexComponent={Topics}/> */}
            <Route path="/topics" component={Topics} />
            <Route path="/login" component={Login} />
            <Route path="/signIn" component={SignIn} />
            <PrivateRoute
              path="/private"
              component={Topics}
              privateComponent={Private}
              redirectComponent={Login}
              isAuth={isAuth}
            />
          </div>
      </Grid>
    )
  }
}

interface IStateToProps {
  state: { user: IUserStore },
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
    loginWithToken: (() => any),
  },
}

const mapDispatchToProps: (dispatch: any) => IDispatchProps = (dispatch: any) => {
  return {
    dispatch: {
      loginWithToken: () =>
        dispatch({
          type: UserTypes.loginToken,
          action: {
            dispatch,
          },
        }),
    },
  }
}

export const MainView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainViewComponent)
