import React from "react";
import "./register.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";



function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [register, setRegister] = useState(false);
  const [picture, setPicture] = useState('');
  const [imageprev, setImageprev] = useState();
  const history = useNavigate();
  const [msg, setMsg] = useState('');
  const [userurl, setUserurl] = useState('');

  
  function handleChange(e) { 
  setImageprev(URL.createObjectURL(e.target.files[0]));
  const img = e.target.files[0]
  setPicture(img);
  }

  var image = picture.name

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/portfolioadmin/', {
       
              
        firstname: firstname,
        lastname: lastname,
        password: password,
        confirmpassword: confirmpassword,
        email: email,
        image: image       
        
    }).then((result) => {
      //setRegister(true);
      setUserurl(result.data.msg.portfolioadminid);
      console.log(result.data.msg.portfolioadminid);
      console.log(userurl);
      if(result){
        
        history("/login");
      }
    })
    
    }catch (error)  {
      if (error.response) {
        setMsg(error.response.data.msg);
    }
    }
    
    var formData = new FormData()
      formData.append('file', picture);
    const config = {
      method: "post",
    url: "http://localhost:5000/profile",
    data:formData
    };
    axios(config)
    .then((result) => {
      setRegister(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });

  }
  
  return (

    <><div className="wrapper_flexB">
      <div className="h2parent">
        <h2 className="login_header">Sign Up</h2>
      </div>
      <div className="paraparent">
        <p className="para_details">Please fill this form to create an account.</p>
      </div>
      <form encType="multipart/form-data"  method="post">
        <div className="form-group-parent2">
        <div className="form-group"><p className="has-text-centered">{msg}</p></div>
          <div className="input1_parent">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              className="form-control"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)} 
              />
            <label htmlFor="firstname" className="labText">First Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              className="form-control"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              />
            <label htmlFor="lastname" className="labText">Last Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="none"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
               />
            <label htmlFor="password" className="labText">Password</label>
          </div>
          <div className="help_parent"> <span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="password"
              name="confirm_password"
              autoComplete="none"
              id="confirmpassword"
              placeholder="Confirm Password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              />
            <label htmlFor="confirmpassword" className="labText">Confirm Password</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label htmlFor="email" className="labText">Email</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

  <div className="form-group-parent-file">
  <div className="fileBtn_parent">
    <input  type="file" name='file' onChange={handleChange} /> 
 
    </div>

    <div className="img_parent">
    <img
    className="img_content"
    alt='avatarimg' 
    src={imageprev}
    id="profileDisplay" />
    
    </div>
  </div>

        <div className="form-group-submit-parent">
          <>
            <input type="submit" className="btn_submit" onClick={(e) => handleSubmit(e)} value="Register" />

            <input type="reset" className="btn-reset" value="Reset" />
          </>
        </div>
        <div className="link_parent">
          <p className="reg_para">Already have an account?<Link to="/login" className="reg_link">Login</Link></p>
        </div>
          {/* display success message */}
          {register ? (
            <p className="text-success">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger">You Are Not Registered</p>
          )}
      </form>
    </div>

       </>
  );
}

export default Register