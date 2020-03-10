import React from 'react';
import LandingPage from './landingPage';
import {Switch,Route} from 'react-router-dom';
import Contact from './contact';
import Skills from './skills';
import Projects from './projects';


const Main = () =>(
    <Switch>
        <Route exact path = "/" component = {LandingPage}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/skills" component = {Skills}/>
        <Route path = "/projects" component = {Projects}/>
    </Switch>
)

export default Main;