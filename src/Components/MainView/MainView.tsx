import { Grid } from '@material-ui/core'
import * as React from 'react'
import { Route } from 'react-router-dom'
import { MainPage } from '../../Containers/Main/Main'

const About = () => (
  <div>HOME</div>
)

const Topics = () => (
  <div>HOME</div>
)

export class MainView extends React.Component {
  public render() {
    return (
      <Grid item={true} xs={12} sm={9} md={10}>
          <div>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
      </Grid>
    )
  }
}