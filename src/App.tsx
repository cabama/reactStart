import { Grid } from '@material-ui/core'
import * as React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { LeftMenu } from './Components/LeftMenu/LeftMenu'
import { MainView } from './Components/MainView/MainView'
import { MenuBar } from './Components/Menu/MenuBar'

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Router>
          <div>
            <MenuBar />
            <Grid container={true} spacing={0}>
              <Grid item={true} xs={12} sm={3} md={2}>
                <LeftMenu />
              </Grid>
              <MainView />
            </Grid>
          </div>
        </Router>

      </div>
    )
  }
}

export default App
