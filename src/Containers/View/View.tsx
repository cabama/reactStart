import * as React from 'react'
import { LeftMenu } from '../../Components/LeftMenu/LeftMenu'
import { MenuBar } from '../../Components/Menu/MenuBar'

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

interface IProps {
  MenuBar: boolean
  SideMenu: boolean
}

class View extends React.Component <IProps> {

  constructor(props: IProps) {
    super(props)
  }

  public render() {
    return (
      <div className="View">
        <div>
          {<MenuBar/>}
          <div style={AppStyle}>
            <LeftMenu/>
            <main style={MainStyle}>
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default View
