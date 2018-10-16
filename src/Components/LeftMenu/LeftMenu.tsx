import * as React from 'react'
import { connect } from 'react-redux'
import MediaQuery from 'react-responsive'
import { Dispatch } from 'redux'
import { setupTypes } from '../../Redux/Actions/setupActions'
import { ISetUpStore } from '../../Redux/Store/setupStore'
import { LeftMenuDesktop } from './LeftMenuDesktop'
import { LeftMenuResposive } from './LeftMenuResposive'

type DrawableProps = IStateToProps & IDispatchToProps

class Drawablemenu extends React.Component<DrawableProps> {

  constructor(props: DrawableProps, state: any) {
    super(props, state)
  }

  public render() {
    debugger
    return (
      <MediaQuery maxDeviceWidth={1224}>
        {(matches) => this.getDrawableMenu(matches)}
      </MediaQuery>
    )
  }

  public getDrawableMenu = (matches: boolean) => {
    const visible = this.props.state.setup.isDrawableVisible
    const close = this.props.dispatcher.closeMenu
    if (matches) return <LeftMenuResposive visible={visible} close={close}/>
    else return <LeftMenuDesktop visible={visible} close={close}/>
  }

}

interface IStateToProps {
  state: {
    setup: ISetUpStore,
  }
}

const mapStateToProps = (state: any): IStateToProps => {
  return {
    state: {
      setup: state.setup,
    },
  }
}

interface IDispatchToProps {
  dispatcher: {
    closeMenu: () => void,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
  return {
    dispatcher: {
      closeMenu: () => dispatch(
        { type: setupTypes.closeDrawable },
      ),
    },
  }
}

export const LeftMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawablemenu)
