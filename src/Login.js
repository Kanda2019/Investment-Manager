import React, { Component, store} from 'react';
import {Button, Form, Grid, Header, Segment,} from 'semantic-ui-react';
import HomePage from './HomePage';
export default class Login extends Component{

    state = {}
    handleClick (e)
    {
        e.preventDefault();
        console.log(e);

        const { username, password } = this.state;
        const { history } = this.props;
      
        this.setState({ error: false });
      
        if (!(username === 'admin' && password === 'admin')) {
          return this.setState({ error: true });
        }
      
        store.set('loggedIn', true);
        history.push(<HomePage/>);
    }
    render(){
        return(
            <div>
                <Grid centered columns={2}>
                    <Grid.Column>
                    <Header as="h2" textAlign="center">
                        Login
                    </Header>
                    <Segment>
                        <Form size="large">
                        <Form.Input
                            name = "username"
                            fluid
                            icon="user"
                            iconPosition="left"
                            placeholder="User Id"
                        />
                        <Form.Input
                            fluid
                            name = "password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Button color="blue" fluid size="large"
                            content = 'Login'
                            onClick={this.handleClick}
                        />
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
            </div>
        );
    }
}
const handleLogout = history => () => {
    store.remove('loggedIn');
    history.push('/login');
  };