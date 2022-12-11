import React, {useState, useEffect} from "react";
import axios from "axios";
import RenterNavbar from "./RenterNavbar";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const AddCar = ()=>{
    
    let[token, setToken]= useState("");
    let[carName, setCarName] = useState("");
    let[carModel, setCarModel] = useState("");
    let[cartype, setCarType] = useState("");
    let[carNumber, setCarNumber] = useState("");
    let[carPrice, setCarPrice] = useState("");
    let[dateOfBuy, setDateOfBuy] = useState("");
    let[details, setDetails] = useState("");
    let[carSitNum, setCarSitNum] = useState("");
    let[carColor, setCarColor] = useState("");
    
    const navigate = useNavigate();
    
    const addCarSubmit= ()=>{
        let user = JSON.parse(localStorage.getItem('user'));
       
        var obj = {car_name:carName, car_model:carModel, car_number: carNumber,car_details:details,rent_price:carPrice,car_buy_date:dateOfBuy,car_type:cartype,car_color:carColor,sit_number:carSitNum,userid:user.userId};
        axios.post("http://127.0.0.1:8000/api/add_new_car",obj)
        .then(resp=>{
            var user = resp.data;
            console.log(user);
            alert("Car Added Successfully");
            navigate('/dashboard_renter');
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
        }).catch(err=>{
            alert(err);
            console.log(err);
        });
         
        console.log(obj);

    }



     return(
        <div>
            <RenterNavbar/>
            <div className="Auth-form-container">
            <div className="Auth-form">
            
            <form >
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">Add A NEW CAR</h3>
            <div className="form-group mt-3">
            <label>Car Name</label>
                 <input type="text" className="form-control mt-1" placeholder="Enter Car Name" value={carName} onChange={(e)=>setCarName(e.target.value)} ></input>
            
            </div>
            <div className="form-group mt-3">
            <label>Car Model</label>
                <input type="text" placeholder="Enter Car Model" className="form-control mt-1" value={carModel} onChange={(e)=>setCarModel(e.target.value)} ></input>
            </div>

            <div className="form-group mt-3">
            <label>Car Type</label>
                
                <input type="radio" value="Family" name="cartype" onChange={(e)=>setCarType(e.target.value)} /> Family
                
                <input type="radio" value="Non-family" name="cartype" onChange={(e)=>setCarType(e.target.value)}/> Non-family
            
            </div>

            <div className="form-group mt-3">
            <label>Car Number</label>
                <input type="text" placeholder="Enter Car Number" className="form-control mt-1" value={carNumber} onChange={(e)=>setCarNumber(e.target.value)} ></input>
            </div>

            <div className="form-group mt-3">
            <label>Car Price</label>
                <input type="text" placeholder="Enter Car Price" className="form-control mt-1" value={carPrice} onChange={(e)=>setCarPrice(e.target.value)}></input>
            </div>
            
            <div className="form-group mt-3">
            <label>Date Of Buying</label>
            <input type="date" className="form-control mt-1" value={dateOfBuy} onChange={(e)=>setDateOfBuy(e.target.value)}></input> 
            </div>

            <div className="form-group mt-3">
            <label>Choose Color</label> 
            <input type="text" className="form-control mt-1" value={carColor} onChange={(e)=>setCarColor(e.target.value)}></input>
            </div>

            <div className="form-group mt-3">
            <label>Choose Sit number</label> 
            <input type="text" className="form-control mt-1" value={carSitNum} onChange={(e)=>setCarSitNum(e.target.value)}></input>
            </div>

            <div className="form-group mt-3">
            <label>Car Details</label> 
            <textarea  className="form-control mt-1" placeholder="Write Something" value={details} onChange={(e)=>setDetails(e.target.value)}></textarea>
            </div>


            </div>
            </form>
            <br/>
            <div className="Auth-form-content">
            <button  className="btn btn-primary" onClick={addCarSubmit}>Upload</button>
            
            </div>
            </div>
        </div>
         
        </div>

    )
}
export default AddCar; 