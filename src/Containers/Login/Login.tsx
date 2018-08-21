import { Card, Typography } from '@material-ui/core'
import * as React from 'react'
import { connect } from 'react-redux'
// import { LoginService } from '../../Services/LoginService'
import { CardStyle, ContainerStyle } from './LoginStyle'

export class LoginPage extends React.Component {

  public render() {
    return (

      <div className={ContainerStyle}>
        <Card className={CardStyle}>
          <Typography variant="headline" component="h2"> Login </Typography>
        </Card>
      </div>
    )
  }

  // private async login() {
  //   await LoginService.loginWithEmail('email', 'password')
  //   debugger
  // }
}

const mapStateToProps = (state: any) => {
  return {
    state: {
      ...state,
    },
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    counter_add: (type: string) => dispatch({
      type,
    }),
  }
}

export const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
