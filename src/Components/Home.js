import React, {useState} from 'react';
import HomeNave from './HomeNave';
const Home=()=>
{
    const loginStyle={
        width: "50%",
        margin: "auto",
        paddingTop: "50px",
        paddingBottom: "50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:"100px", 
    };
   
    return(
        <div>
            
            <HomeNave/>
            <div style={loginStyle}>
            <h2>Welcome to our Home Page</h2>
            </div>

        </div>
        
    )
}
export default Home;