import { Grid } from '@material-ui/core'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, Store } from 'redux'
import './App.css'
import { LeftMenu } from './Components/LeftMenu/LeftMenu'
import { MainView } from './Components/MainView/MainView'
import { MenuBar } from './Components/Menu/MenuBar'
import { userReducer } from './Redux/Reducers/userReducer'

class App extends React.Component {

  private store: Store<any>

  constructor(props: any) {
    super(props)
    this.store = createStore(userReducer) as Store<any>
  }

  public render() {
    return (
      <div className="App">
        <Provider store={this.store}>
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
        </Provider>
      </div>
    )
  }
}

export default App
