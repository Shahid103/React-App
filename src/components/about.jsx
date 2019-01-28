import React,{Component} from "react";
import $ from "jquery";

class about extends Component{

    render(){
        function onClickHandler()
        {
            $("#readmore").animate({left:"1000px" , opacity:"0"},"slow");        
        }

        function onMouseEnterHandler()
        {
            $("#readmore").animate({left:"-10px" , opacity:"1"},"slow");
        }
        return (            
            
            <div className="about">
                <div id="left">
                    <div id="c">
                        <i class="fas fa-archway"></i>
                        <h1>We Begin 2015</h1>
                        <p>we develop websites & maintain them we develop websites & maintain them we develop <br/> websites & maintain them we develop websites & maintain them
                        we develop websites & <br/>  maintain them we develop websites & maintain them</p>      
                        
                        <div id="c1">
                        <i class="fas fa-chart-line"></i>
                            <h1>Becomig Brand 2016 to 2018</h1>
                            <p>we develop websites & maintain them we develop websites & maintain them we develop <br/> websites & maintain them we develop websites & maintain them
                            we develop websites & <br/>  maintain them we develop websites & maintain them</p>          
                        </div> 
                            
                        <div id="c3">
                        <i class="fas fa-users"></i>
                            <h1>Be Part of Us 2019</h1>
                            <p>we develop websites & maintain them we develop websites & maintain them we develop <br/> websites & maintain them we develop websites & maintain them
                            we develop websites & <br/>  maintain them we develop websites & maintain them</p>      
                        </div>       
                    </div>
                </div>

                

                <div id="right">
                    <h1 id="hed">About Us</h1>
                    <div id="inner-slider">
                        <h1>What is Code Mission? </h1>    
                        <p>we develop websites & maintain them we develop websites & maintain them we develop we develop websites & maintain them we develop websites & maintain them we develop .
                        </p>
                    <div id="adopt_today" onClick={onMouseEnterHandler}>Read More</div> 
                    </div>
                
                <div id="readmore">
                    
                    <h1>Angular</h1>
                    <p>
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                       
                    </p>

                    <h1>Node Js</h1>
                    <p>
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                      
                    </p>

                    <h1>Ajax</h1>

                    <p>
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                        we develop websites & maintain them we develop websites & maintain them we develop .
                          
                    </p>
                    
                <button id="goback" onClick={onClickHandler}>Go Back</button>
                </div> 
            </div>
            
             </div>

        );
    }
}

export default about;