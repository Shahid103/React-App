import React from 'react';

const profile =(obj)=>{
    
        var response = obj.arr.map((obj) =>{
            return (
                <div className="data">
                    <img src={obj.img} alt=""/>
                    <h1>{obj.name}</h1>
                    <div className="info">
                        <p>Father Name:{obj.fatherName}</p>
                        <p>Age: {obj.age}</p>
                        <p>Email:{obj.email}</p>
                        <p>Cell:{obj.contact.Cell}</p>
                        <p>Address:{obj.contact.Residence}</p>
                        <i>{obj.twitter}{obj.fb}{obj.link}</i>
                    </div>
                </div>
            );
        });

        return (        
            <div className="profile">
                <h1>Our Team</h1>
                {response}
            </div>
        );
}
export default profile;