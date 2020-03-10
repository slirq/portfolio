import React,{Component} from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton}from 'react-mdl';
class Projects extends Component{ 
    
    render(){
        return(
            <div>
                <Grid >
                    
                <Cell col = {6}>
                     <div className = "project-grid">
                    {/* ---------------------------------------------------------------- */}
                    <Card shadow={0} style={{width: '512px', margin: '10px'}}>
    <CardTitle style={{color: '#fff ', height: '500px', background: "url(https://media.giphy.com/media/j65IoDyi5YJH84unTr/giphy.gif)"}}>Hand Gesture prediction</CardTitle>
                             <CardText >
                                 <ul>
                                   <li>
                                        successfully applied the process of identifying human hand gesture prediction for the its imminent use for the welfare of differently abled and various other application in the real world.
                                   </li>
                                   <li>Technologies used are: &nsbp;Python, convolutional neural networks,deep learning,image processing and data visualization</li>
                                 </ul>
                            
                             
                            </CardText>
                            <CardActions border>
                            <Button href= "http://google.com" colored>GIthub repo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton href= "http://google.com" name="images" />
                            </CardMenu>
                        </Card></div>
                        </Cell>
                        {/* ------------------------------------------- */}
                        
                         <Cell col = {6}>
                                <div className = "project-grid">
                        <Card shadow={0} style={{width: '512px', margin: '10px'}}>
    <CardTitle style={{color: '#fff', height: '500px', background: 'url(https://media.giphy.com/media/mEnCwGOJxRdLnb0ZnL/giphy.gif) center / cover'}}>Self-Driving Car</CardTitle>
                             <CardText >
                                 <ul>
                                        <ls>
                                             Successfully built and deployed a self driving car with real time obstruction and road sign detection
                                        </ls>
                                        <ls>
                                             Technologies used are: &nsbp; convolutional neural networks,Rasberry pi(embedded system),Image processing,Data wrangling,Python,Deep Learning;
                                        </ls>
                                 </ul>
                            
                             
                            </CardText>
                            <CardActions border>
                            <Button href= "http://google.com" colored>GIthub repo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton href= './20190917_110222.jpg' name="image" />
                            </CardMenu>
                        </Card>
                        {/* ------------------------------------ */}
                        
                  </div>
                </Cell>  
              
             {/*-----------------------------------------------------------  */}
             
                    
                <Cell col = {6}>
                     <div className = "project-grid">
                    {/* ---------------------------------------------------------------- */}
                    <Card shadow={0} style={{width: '512px', margin: '10px'}}>
    <CardTitle style={{color: '#fff', height: '500px', background: 'url(https://media.giphy.com/media/SvGAmHKlb8tmt02ok2/giphy.gif) center / cover'}}>Tic-Tac-Toe App</CardTitle>
                             <CardText >
                                 <ul>
                                      <ls>  Created a Tic Tac Toe game in an android environment;
                              </ls> 
                              <ls>
                                   technologies used are: &nsbp; JAVA, Android Studio 
                              </ls>
                                   
                                 </ul>
                            
                             
                            </CardText>
                            <CardActions border>
                            <Button href= "http://google.com" colored>GIthub repo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton href= "http://google.com" name="images" />
                            </CardMenu>
                        </Card></div>
                       </Cell>
                       
                        {/* ------------------------------------------- */}
                        
                        <Cell col = {6}><div className = "project-grid">
                        <Card shadow={0} style={{width: '512px', margin: '10px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                             <CardText >
                                 <ul>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </ul>
                                 <ul>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </ul>
                                 <ul>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </ul>
                                 <ul>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 </ul>
                            
                             
                            </CardText>
                            <CardActions border>
                            <Button href= "http://google.com" colored>GIthub repo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            <IconButton href= "http://google.com" name="image" />
                            </CardMenu>
                        </Card> </div>
                        {/* ------------------------------------ */}
                       </Cell> 
                  
                 
            </Grid> 
            </div>
            )
        }
    }

export default Projects;