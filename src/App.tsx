import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, Store } from 'redux'
import './App.css'
// import { LeftMenuDesktop } from './Components/LeftMenu/LeftMenuDesktop'
import { LeftMenu } from './Components/LeftMenu/LeftMenu'
import { MainView } from './Components/MainView/MainView'
import { MenuBar } from './Components/Menu/MenuBar'
import { MyStore } from './Redux/Store/Store'

const AppStyle: React.CSSProperties = {
  flexGrow: 1,
  height: 430,
  zIndex: 1,
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
}

const MainStyle = {
  flexGrow: 1,
  minWidth: 0,
}

class App extends React.Component {

  private store: any

  constructor(props: any) {
    super(props)
    this.store = createStore(MyStore) as Store<any>
  }

  public render() {
    return (
      <div className="App">
        <Provider store={this.store}>
          <Router>
            <div>
              <MenuBar />
              <div style={AppStyle}>
                <LeftMenu />
                <main style={MainStyle}>
                  <MainView />
                </main>
              </div>
            </div>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default App
