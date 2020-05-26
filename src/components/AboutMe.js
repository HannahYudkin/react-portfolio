import React, { Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Headshot from "../images/LinkedInPhoto.jpg";




class AboutMe extends Component{
    render(){
        return(
            <img width="50%" alt="headshot" src={Headshot}></img>
        )
    }
}

export default AboutMe;