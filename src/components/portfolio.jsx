import React,{Component} from "react";
import ReactExpandableGrid from 'react-expandable-grid';


class portfolio extends Component{

    client_arr = 
    [{title:'Coca Cola', description:`An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services`, img:"./img/g3.jpg", link : "./img/g3.jpg"},
    {title:'Coca Cola',  description:'An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services', link:"./img/g5.jpg",  img:"./img/g5.jpg"},
    {title:'Coca Cola',  description:'An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services', link:"./img/g7.jpg",  img:"./img/g7.jpg"},
    {title:'Coca Cola',  description:'An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services An industry veteran of over 17 years Mission Code meets complex business challenges with native hybrid and custom software development. We think big design smart and develop fast for all screens projects and teams accelerating digital ideas with end-to-end technology services', link:"./img/g13.jpg", img:"./img/g13.jpg"}];

    data_string = JSON.stringify(this.client_arr)

    render(){

        var rslt = this.client_arr.map((objt) =>{
            return (

                <div className="port">
                    <img src={objt.img} alt=""/>
                </div>
            );
        });

        return (            
    
            <div className="portfolio">
                <h1>Portfolio</h1>
                    <div className="clients">
                        <ReactExpandableGrid
                                gridData ={this.data_string}
                                detailHeight = {200}
                                ExpandedDetail_image_size={200}
                                cellSize={300}
                                cellMargin={10}
                        /> 
                    </div>

                    <div className="slider">
                        <img src="./img/s1.png"/>
                        <img src="./img/b2.png"/>
                        <img src="./img/b3.png"/>
                        <img src="./img/b4.png"/>
                        <img src="./img/b6.png"/>
                        <img src="./img/b8.png"/>
                        <img src="./img/b9.png"/>
                   </div>
            </div>
        );
    }
}

export default portfolio;