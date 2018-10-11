import * as React from 'react'
import { connect } from 'react-redux'
import { setMobileView } from '../../Redux/Actions/setupActions'
import { ISetUpStore } from '../../Redux/Store/setupStore'
import { LeftMenuDesktop } from './LeftMenuDesktop'
import { LeftMenuResposive } from './LeftMenuResposive'

interface IProps {
  setup: ISetUpStore,
  actions: {
    setMobileView: (x: boolean) => void,
  }
}

class Drawablemenu extends React.Component<IProps> {

  constructor(props: any, state: any) {
    super(props, state)
  }

  public render() {
    return (
      <div><this.getDrawableMenu/></div>
    )
  }

  public componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  public getDrawableMenu = () => {
    return this.props.setup.isMobile
      ? <LeftMenuResposive/>
      : <LeftMenuDesktop/>
  }

  private updateDimensions = () => {
    const isMobile = window.innerWidth < 770
    this.props.actions.setMobileView(isMobile)
  }

}

const mapStateToProps = (state: any) => {
  return {
    setup: state.setup,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      setMobileView: (isMobile: boolean) => dispatch(setMobileView(isMobile)),
    },
  }
}

export const LeftMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drawablemenu)
