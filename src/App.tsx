import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { applyMiddleware, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import './App.css'
// import { LeftMenuDesktop } from './Components/LeftMenu/LeftMenuDesktop'
import { MainView } from './Components/MainView/MainView'
import { MyStore } from './Redux/Store/Store'

class App extends React.Component {

  private store: any

  constructor(props: any) {
    super(props)
    this.store = createStore(MyStore, {}, applyMiddleware(thunk)) as Store<any>
  }

  public render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <Router>
            <MainView />
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
