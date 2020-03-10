import React,{Component} from 'react';
import { Grid,Cell } from 'react-mdl';
import logo from './mypic.jpg';

class LandingPage extends Component{
    render(){
        return(
            <div style = {{width:'100%',margin:'auto'}}>
            <Grid className = "landing-grid">
                <Cell col = {12}>
                    <img
                    src = {logo}
                    alt = "avatar"
                    className = "avatar-image"
                    />
                <div className = 'banner-text'>
                    <h1>
                        Abdullah Shaikh
                    </h1>
                    <hr/>
                    <p>
                        {/* MAJOR SKILL PLACEHOLDER */}
                    </p>
                    <div className = "links">

                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-github" aria-hidden="true"></i>
                        </a>

                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        </a>

                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>

                    </div>
                </div>
                </Cell>
            </Grid>
            </div>
        )
        }
    }

export default LandingPage;