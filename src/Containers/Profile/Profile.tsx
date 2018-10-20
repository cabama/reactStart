import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core'
import * as React from 'react'
import { connect } from 'react-redux'
import { object, ObjectSchema, string, ValidationError } from 'yup'
import { IMyStore } from '../../Redux/Store/Store'
import { baseUrl } from '../../shared/urls'
import View from '../View/View'
import { CardStyle } from './ProfileStyle'

type IProps = {
  history: { push: (url: string) => void },
} & ReturnType<typeof mapStateToProps>

interface IFormFields {
  email: string
  name: string
  surname: string
}

interface IformStatus {
  error: true,
  info: string,
}

type IStateValidate = {
  [key in keyof IFormFields]?: IformStatus
}

interface IState extends IFormFields {
  isValidate: boolean
  validationErrors: IStateValidate
}

interface ISetTextField {
  name: keyof IStateValidate,
  label?: string
  type: string,
}

const getYupErrors = (error: ValidationError) => {
  const errorObject = {}
  error.inner.forEach((errors) => {
    errorObject[errors.path] = errors.errors
  })
  return errorObject
}

export class ProfileView extends React.Component<IProps, any> {

  public formSchema: ObjectSchema<{ [k in keyof IFormFields]: any }> = object({
    email: string().required('Email is Requerided').email('Is not email valid.'),
    name: string().required('Name is Requerided.'),
    surname: string().required('Surname is requerided.'),
  })

  public constructor(props: IProps, state: IState) {
    super(props, state)
    this.state = {
      email: this.props.state.user.email || '',
      name: this.props.state.user.name || '',
      surname: this.props.state.user.name || '',
      validationErrors: {},
    }
  }

  public async handleChanges(changes: { name: keyof IStateValidate, value: any }) {
    const userToValidate = {
      email: this.state.email,
      name: this.state.name,
      surname: this.state.surname,
    }
    userToValidate[changes.name] = changes.value
    this.formSchema.validate(userToValidate, { abortEarly: false })
      .then(() => this.setState({ validationErrors: {} }))
      .catch((value) => this.setState({ validationErrors: getYupErrors(value) }))
    this.setState({ [changes.name]: changes.value })
  }

  public render() {
    const avatarURL = baseUrl + '/public/avatar/unkown.png'
    return (
      <View MenuBar={true} SideMenu={true}>
        <Grid container={true} xs={11} justify="center" alignItems="center">
        <Card className={CardStyle}>
          <CardHeader title="Profile" />
          <CardContent>
            <Grid
              container={true}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={24}
            >
              <Avatar src={avatarURL} style={{height: 150, width: 150}} />
              {this.renderForm()}
            </Grid>
          </CardContent>

          <CardActions style={{ justifyContent: 'space-around' }}>
            <Button color="primary" onClick={() => null}>Update Profile</Button>
          </CardActions>
        </Card>
      </Grid>
      </View>
    )
  }

  private renderForm() {
    return (
      <Grid item={true} xs={12} container={true} direction="row" justify="center" alignItems="center">
        {this.setTextField({name: 'name', type: 'text'})}
        {this.setTextField({name: 'surname', type: 'text'})}
        {this.setTextField({name: 'email', type: 'text'})}
      </Grid>
    )
  }

  private setTextField(setup: ISetTextField) {
    return (
      <Grid item={true} xs={12} md={8} container={true} direction="row" justify="center" alignItems="center">
        <TextField
          error={this.state.validationErrors[setup.name]}
          label={setup.label || setup.name}
          type={setup.type}
          value={this.state[setup.name]}
          onChange={(event) => this.handleChanges({ name: setup.name, value: event.target.value })}
          margin="normal"
          style={{ width: '100%' }}
          helperText={this.state.validationErrors[setup.name]}
        />
      </Grid>
    )
  }
}

const mapStateToProps = (myState: IMyStore) => {
  return {
    state: {
      user: myState.user,
    },
  }
}

export const Profile = connect(mapStateToProps)(ProfileView)
