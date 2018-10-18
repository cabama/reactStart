import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core'
import * as React from 'react'
import { object, ObjectSchema, string, ValidationError } from 'yup'
import View from '../View/View'
import { CardStyle, ContainerStyle } from './ProfileStyle'

interface IProps {
  history: { push: (url: string) => void }
}

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

export class Profile extends React.Component<IProps, any> {

  public formSchema: ObjectSchema<{ [k in keyof IFormFields]: any }> = object({
    email: string().required('Email is Requerided').email('Is not email valid.'),
    name: string().required('Name is Requerided.'),
    surname: string().required('Surname is requerided.'),
  })

  public constructor(props: IProps, state: IState) {
    super(props, state)
    this.state = {
      email: '',
      name: '',
      surname: '',
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
    return (
      <View MenuBar={true} SideMenu={true}>
      <div className={ContainerStyle}>
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
              {this.renderForm()}
            </Grid>
          </CardContent>

          <CardActions style={{ justifyContent: 'space-around' }}>
            <Button color="primary" onClick={() => null}>Update Profile</Button>
          </CardActions>
        </Card>
      </div>
      </View>
    )
  }

  private renderForm() {
    return (
      <div style={{ width: '100%' }}>
        {this.setTextField({name: 'name', type: 'text'})}
        {this.setTextField({name: 'surname', type: 'text'})}
        {this.setTextField({name: 'email', type: 'text'})}
      </div>
    )
  }

  private setTextField(setup: ISetTextField) {
    return (
      <Grid item={true} xs={6} style={{ width: '100%' }}>
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
