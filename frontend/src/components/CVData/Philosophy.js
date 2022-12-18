import React, { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
// import useToken from '../App/useToken';
// import Login from '../Login/Login';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function Philosophy() {
  const [body, setBody] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [sent, setSent] = useState(false);
 
  const {philosophyid} = useParams();
  const history = useNavigate();
 
 
 // const { token, setToken } = useToken();

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
      url: "http://localhost:5000/philosophy",
      data: {
      body,
      portfolioid
    }
    };
    setBody('')
     
    axios(configuration)
    .then((result) => {
      setSent(true);
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updatePhilosophy = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/philosophy/${philosophyid}`,{
      body,
      portfolioid
    })
    .then((result) => {
      setBody('')
      setSent(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}

useEffect(() => {

  const getPhilosophyById = async () => {
    const response = await axios.get(`http://localhost:5000/philosophy/one/${philosophyid}`);
    setBody(response.data.body);
  
  }
  
  getPhilosophyById();
}, [philosophyid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Philosophy</h2>
        </div>
        <div className="paraparent">
            <p className="para_details"></p>
        </div>
        <form  method="post" encType="multipart/form-data">
          {philosophyid ? 
          (<React.Fragment>
  <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Philosophy Here"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Philosophy Here</label>
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
          </React.Fragment>):
          (<React.Fragment>
            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
            <textarea
             name="message"
              form="contact" 
              id="message__label"
               required placeholder="Write Your Philosophy Here"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
            <label htmlFor="message__label" className="form__label">Your Philosophy Here</label>
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>
          </React.Fragment>)}

         
    
  <div className="form-group-submit-parent">
  {philosophyid ? (
    <input type="submit" className="btn_submit" value="Update"  onClick={updatePhilosophy} />
  ):(
    <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
  )}
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Entry Was saved Successfully</p>
        ) : (
          <p className="text-danger">Your Entry Was Not saved</p>
        )}
        </form>
    </div>
  );
}