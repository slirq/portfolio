import React,{Component} from 'react';
import {Cell,Grid} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <div>
                 <Grid className = "skill-grid">
                <Cell col = {12}>
                <div style={{float: 'left', width: '50%'}}>
                    <ul >
                    <h1>skills</h1>
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Android Development</li>
                    <li>Front end development(React)</li>
                    <li>Reinforcement learning</li>
                    <li>Image Processing</li>
                    <li>Robotics & embedded systems</li>
                    <li>Socket Programming</li>
                    <li>Big Data and Hadoop</li>
                    <li>Unity</li>
                    </ul>
                    </div>
                    <div style={{float: 'right', width: '50%' }}>
                    <ul style ={{outlineColor:'black'}}>
                    <h1>languages</h1>
                    <li>C</li>
                    <li>C++</li>
                    <li>JAVA</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>HTML5 & CSS</li>
                    <li>R</li>
                    </ul>
                    </div>
                </Cell>
            </Grid>
            </div>
            )
        }
    }

export default Skills;