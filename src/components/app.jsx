import React,{Component} from "react";
import {Route} from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Service from "./service";
import Portfolio from "./portfolio";
import Profile from "./profile";
import Contact from "./contact";
import Footer from "./footer";
import Profile_data from "./profile_data.js";

class App extends Component{
    state = {
            arr:Profile_data
            }

    render(){
    
        return (            
        <div className="app">
        
            <Nav/>
            <Route exact path ="/"  component = {Home}/>
            <Route path ="/about"   component = {About}/>
            <Route path ="/service" component = {Service}/>
            <Route path ="/contact" component = {Contact}/>
            <Route path ="/profile"      render={()=>{return(<Profile arr={this.state.arr}/>)}}/>
            <Route path ="/portfolio"    component = {Portfolio}/>
            <Footer/>  

        </div>
        );
    }
}
export default App;









