import React, { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
// import useToken from '../App/useToken';
// import Login from '../Login/Login';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function Reference() {
  const [fullname, setFullname] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [address, setAddress] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  
  const [sent, setSent] = useState('');
 
 const {referenceid} = useParams();
  const history = useNavigate();
  //const { token, setToken } = useToken();

  useEffect(() => {

    const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:5000/portfolioadmin/token');
          const decoded = jwt_decode(response.data.accessToken);
          setPortfolioid(decoded.userId);
          
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }

    refreshToken();
   
  }, [portfolioid,history]);

  

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
  
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/addreference",
      data: {
        fullname,
        phoneno,
        address,
        portfolioid
      },
      
    };
    setFullname('')
      setPhoneno('')
      setAddress('')
    axios(configuration)
    .then((result) => {
      setSent(true);
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updateReference = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/reference/${referenceid}`,{
      fullname,
      phoneno,
      address,
      portfolioid
    })
    .then((result) => {
      setFullname('')
      setPhoneno('')
      setAddress('')
      setSent(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getReferenceById = async () => {
    const response = await axios.get(`http://localhost:5000/reference/one/${referenceid}`);
      setFullname(response.data.fullname)
      setPhoneno(response.data.phoneno)
      setAddress(response.data.address)
  
  }
  
  getReferenceById();
}, [referenceid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Reference</h2>
        </div>
       
        <form  method="post" encType="multipart/form-data">
        {referenceid ?
        (<React.Fragment>
    <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='fullname'
                name="fullname" 
                placeholder='Full Name'
                className="form-control" 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)} 
                />
                <label htmlFor='fullname' className="labText">Full Name</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
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


            <div className="form-group-parent1">
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
        </React.Fragment>):
        (<React.Fragment>
              <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='fullname'
                name="fullname" 
                placeholder='Full Name'
                className="form-control" 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)} 
                />
                <label htmlFor='fullname' className="labText">Full Name</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
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


            <div className="form-group-parent1">
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
        </React.Fragment>)
      }

    
  <div className="form-group-submit-parent">
{referenceid ? (
  <input type="submit" className="btn_submit" value="Update"  onClick={updateReference} />
):(
  <input type="submit" className="btn_submit" value="Send"  onClick={handleSubmit} />
)}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Reference Was sent Successfully</p>
        ) : (
          <p className="text-danger">Your Reference Was Not sent</p>
        )}
        </form>
    </div>
  );
}