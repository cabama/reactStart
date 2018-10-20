import { Grid } from '@material-ui/core'
import * as React from 'react'
import { LeftMenu } from '../../Components/LeftMenu/LeftMenu'
import { MenuBar } from '../../Components/Menu/MenuBar'

const AppStyle: React.CSSProperties = {
  flexGrow: 1,
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
      <div className="View" style={{height: '100%'}}>
          {this.getMenuBar()}
        <div style={{...AppStyle, height: this.calcChildrenHeight()}}>
          <LeftMenu/>
          <Grid container={true} justify="center" style={MainStyle}>
            {this.props.children}
          </Grid>
        </div>
      </div>
    )
  }

  private calcChildrenHeight() {
    return this.props.MenuBar
      ? 'calc(100% - 56px)'
      : '100%'
  }

  private getMenuBar() {
    return this.props.MenuBar
      ? <MenuBar/>
      : null
  }
}

export default View
