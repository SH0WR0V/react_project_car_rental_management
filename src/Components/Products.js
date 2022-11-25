import React from 'react';
const Products=(props)=>
{
    return(
        <div>
           <h5> Name: {props.name} <br/>
            Price:{props.price} </h5>
        </div>
    )
}
export default Products;