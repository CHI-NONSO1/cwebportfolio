import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';




export default function UpdateAcc() {
  const [middlename, setMiddlename] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [updated, setUpdated] = useState('');
  const [position, setPosition] = useState('');
 
  
  const history = useNavigate();
  const {portfolioadminid} = useParams();



  

  const updateAccount = async (e) => {
    
    e.preventDefault();
    await axios.patch(`http://localhost:5000/portfolioadmin/${portfolioadminid}/`,{
 
        portfolioadminid,
        middlename,
        phoneno,
        city,
        address,
        position
      }) 
      .then((result) => {
        setUpdated(true);
        setMiddlename('')
        setPhoneno('')
        setCity('')
        setAddress('')
        setPosition('')
      })
      
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioadminid}`);
  }

  useEffect(() => {
  

    const getPortfolioAdminById = async () => {
    const res =  await axios.get(`http://localhost:5000/portfolioadmin/one/${portfolioadminid}`)
      setMiddlename(res.data.middlename);
      setPhoneno(res.data.phoneno);
      setCity(res.data.city);
      setAddress(res.data.address);
      setPosition(res.data.position);
      
    
    }
    
    getPortfolioAdminById();
  }, [portfolioadminid]);


 
  return(
    <div className="wrapper_flex">
        <div className="h2parent">
            <h2 className="login_header">Update Account</h2>
        </div>
        
        <form  method="post" encType="multipart/form-data">
            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='middlename'
                name="middlename" 
                placeholder='Middle Name'
                className="form-control" 
                value={middlename}
                onChange={(e) => setMiddlename(e.target.value)} 
                />
                <label htmlFor='middlename' className="labText">Middle Name</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text"
                name="position" 
                id='position'
                placeholder='Job Position'
                className="form-control"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
                <label htmlFor='position' className="labText">Job Position</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="number"
                id='phoneno'
                name="phoneno" 
                placeholder='Phone Number'
                className="form-control" 
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                />
                <label htmlFor='phoneno' className="labText">Phone Number</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text" 
                id='city'
                name="city" 
                placeholder='City'
                className="form-control" 
                value={city}
                onChange={(e) => setCity(e.target.value)} 
                />
                <label htmlFor='city' className="labText">City</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent2">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="address"
                name="address" 
                id='address'
                placeholder='Address'
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
                <label htmlFor='address' className="labText">Address</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
    
  <div className="form-group-submit-parentu">
  <input type="submit" className="btn_submit" value="Update"  onClick={updateAccount} />
  <input type="reset" className="btn-resetu" value="Reset" />
  </div>


     
        {updated ? (
          <p className="text-success"></p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>
  );
}