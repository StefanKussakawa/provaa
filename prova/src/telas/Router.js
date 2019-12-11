import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Component } from 'react';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Tela1}></Route>
                <Route path="/tela2" component={Tela2}></Route>
                <Route path="/tela3" component={Tela3}></Route>
            </Switch>
        );
    }
}

export default Router;