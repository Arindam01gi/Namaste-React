import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class About extends React.Component{
    constructor(props){
        super(props)

        console.log("Parent render");
    }

    componentDidMount(){
        console.log("parent Mounting");
    }
    render(){
        return(
            <div>
            <h1>About</h1>
            <UserClass name={"Arindam Maiti(class)"}/>
        </div>
        );
        
    };
}

  

export default About;