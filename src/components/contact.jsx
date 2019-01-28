import React,{Component} from "react";


class contact extends Component{

       

    render(){
        
        return (            
            <div className="contact">            
                    <div id="contact">
                        <h1>Address</h1>
                        <h2>SEND US MEESAGE</h2>  
                        <h3>Contact Information</h3> 
                        <i class="fas fa-university"></i> 
                        <h4>Where to find us?</h4>
                        <p>IT TOWER , GULBURG <br/> Lahore,Pakistan</p>   
                        <h5>E-mail Us At</h5>    
                        <p>Vvork@cloud.com</p> 
                        <h6>Call Us At</h6>    
                        <p>Phone: (042-390788112) <br/> Mobile: (0318-12312311)<br/> Fax:(042-390788112)</p>

                        {/* <div className="social">
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                        </div> */}

                        <input type="text"  placeholder="Name" class="name"/>
                        <br/>
                        <br/>    
                        <input type="email"  placeholder="E-mail" class="mail"/>
                        <br/>    
                        <br/>    
                        <input type="text"  placeholder="Subject" class="sub"/>
                        <br/>
                        <br/>    
                        <input type="area"  placeholder="Message" class="area"/>
                        <button>Submit</button>
                    </div>          
            </div>
            
        );
        
    }
    
}




export default contact;