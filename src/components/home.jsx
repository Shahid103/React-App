import React,{Component} from "react";


class home extends Component{

    render(){
        const left = {marginLeft:'6vw'};

        return (            
    
            <div className="home">

               
                <div className="paragraph">
                    <video autoPlay muted loop >
                        <source src="./img/fade.mp4"/>
                    </video>

                <div className="paragraph" >
                    <h1>Welcome to Code Mission</h1>
                    <p style={left}>It's Nice to meet you</p> <br/> <br/> <br/>
                    <h1>What is Code Mission?</h1>
                    <p>An industry veteran of over 17 years, Mission Code meets complex business challenges with native, 
                    hybrid and custom software development. We think big, design smart and develop fast for all screens, 
                    projects and teams accelerating digital ideas with end-to-end technology services.</p>
                </div>


                </div>
            
            </div>

        );
    }
}

export default home;