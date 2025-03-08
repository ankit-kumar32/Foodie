import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
          super(props);
   
    }
    componentDidMount(){
      //  console.log("Parent component Did mount")
      
    }
    render(){
        //console.log("Parent Render")
        return(
            <div>
         
             <UserClass name={"First (class)"} location={"Dehradun(class)"}/>
            
            </div>
     );
    }
}

export default About;

/*
-Parent Constructor
-Parent Render

-First child constructor
-First child render

-second child constructor
-second child render
<Dom updated- In single BATCH>

-first child did mount
-second child did mount

parent component did mount
*/