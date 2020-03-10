import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import logo from './mypic.jpg';
class Contact extends Component{
    render(){
        return(
            <div cassName="contact-body">
                <Grid className="contact-grid">
                    <Cell col = {6}>
                    <div className = 'contact-text'>
                    
                    <img
                    src = {logo}
                    alt = "avatar"
                    className = "avatar-image"
                    style={{border : "2px solid black",marginTop:"20px"}}
                    />
                    <h1>
                        Abdullah Shaikh
                    </h1>
                    <p>
                       Just trying to learn things and fill in this "about my" section of the website
                    </p>
                    </div>




                    </Cell>
                    <Cell col = {6}>
                    <div style={{}}>
                  
                    <div className = "contactlinks">
                      <ul >
                    <h1>Contacts</h1>
                    <li>
                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-facebook" aria-hidden="true"> &nbsp; Abdullah Shaikh</i>
                        </a>
                        
                        </li>
                    <li>
                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-github" aria-hidden="true"> &nbsp; id:slirq</i>
                        </a>
                        </li>
                    <li>
                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-envelope" aria-hidden="true"> &nbsp;abdullahshaikh136@gmail.com</i>
                        </a>
                        <p></p>
                        </li>
                    <li>
                        <a href = "http://google.com" target = "_blank" rel ="noopener noreferrer">
                        <i class="fa fa-phone" aria-hidden="true"> &nbsp;(+91)8951510944</i>
                        </a>
                        <p></p>
                        </li>
                         </ul>
                    </div>
                   
                    </div>e</Cell>
                </Grid>
            </div>
            )
        }
    }

export default Contact;