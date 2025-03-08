import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      // count:0,
      // count2:1
      userInfo: {
        name: "dummy",
        location: "default",
        // avatar_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fultimatecodersclub%2F&psig=AOvVaw32JavVPl0MaCgOa_RtG5S8&ust=1697117768539000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi_yrWP7oEDFQAAAAAdAAAAABAD"
      },
    };
    // console.log(this.props.name+ "Child Constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name+"child component did mount")
    const data = await fetch("https://api.github.com/users/ankit-kumar32");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // const {count}=this.state;
    // const {count2}=this.state;
   

    return (
      <div className="user-card">
        {/* <img src={avatar_url}  className="rounded-lg w-12" /> */}
        {/* <h1>Count:{count}</h1>
                <button onClick={()=>{
                    //Never update state variables directly
                    this.setState({
                        count:this.state.count+1,
                    }

                    );
                }}>
                    Count Increase
                </button> */}
        {/* <h2>count2:{count2}</h2> */}
        <h2>Name:{name}</h2>
        <h3>location:{location}</h3>
        <h4>Contact:ppa@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/*
* ----Mounting----

* Constructor(dummy)
* Render(dummy)
  * <HTML(dummy)/>
* ComponentDidMount
  * <Api Call>
  *  <this.setState> -> state variable is updated
  * 

* ---- UPDATE----
  * render(Api data)
  * <HTML (newApi data)/>
  * 
  * ComponentDidUpdate()



*/
