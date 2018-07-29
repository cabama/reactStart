import { Icon } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import * as React from 'react'

export class MainPage extends React.Component {

  public handleAuth() {
    // googleAuth().then((value) => ((window as any).gauth = value))
    const url = 'http://localhost:2525/api/google'
    const windowOpts = `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0`

    window.open(url, '_blank', windowOpts)
  }

  public render() {
    return (
      <Button onClick={this.handleAuth} variant="raised" color="primary" style={{ marginTop: '10px' }}>
        <Icon>fingerprint</Icon>
        Login with googleAuth
      </Button>
    )
  }
}
