import React, { useState,useEffect } from 'react';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function EduQualification() {
  const [qualiobtained, setQualiobtained] = useState('');
  const [institution, setInstitution] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [country, setCountry] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [sent, setSent] = useState('');
  
  
 
 
const {eduqualid} = useParams()
  const history = useNavigate();
 

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
      url: "http://localhost:5000/eduquali",
      data: {
        qualiobtained,
        institution,
        startdate,
        enddate,
        country,
        portfolioid
      },
     
    };
    setQualiobtained('')
      setInstitution('')
      setStartdate('')
      setEnddate('')
      setCountry('')
    axios(configuration)
    .then((result) => {
      setSent(true);
      
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updateEduQuali = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/eduquali/${eduqualid}`,{
      qualiobtained,
      institution,
      startdate,
      enddate,
      country,
      portfolioid
    })
    .then((result) => {
      setQualiobtained('')
      setInstitution('')
      setStartdate('')
      setEnddate('')
      setCountry('')
      setSent(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getBiodataById = async () => {
    const resp = await axios.get(`http://localhost:5000/eduquali/one/${eduqualid}`);
    setQualiobtained(resp.data.qualiobtained)
      setInstitution(resp.data.institution)
      setStartdate(resp.data.startdate)
      setEnddate(resp.data.enddate)
      setCountry(resp.data.country)
  
  }
  
  getBiodataById();
}, [eduqualid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Qualifications Obtained</h2>
        </div>
        <form  method="post" encType="multipart/form-data">
          {eduqualid ? (
            <React.Fragment>
<div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='qualiobtained'
                name="qualiobtained" 
                placeholder='Qualification'
                className="form-control" 
                value={qualiobtained}
                onChange={(e) => setQualiobtained(e.target.value)} 
                />
                <label htmlFor='qualiobtained' className="labText">Qualification</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='institution'
                name="institution" 
                placeholder='Name of Institution'
                className="form-control" 
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                />
                <label htmlFor='institution' className="labText">Name of Institution</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='startdate'
                name="startdate" 
                placeholder='Start Date'
                className="form-control" 
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
               
                name="enddate" 
                placeholder='End Date'
                className="form-control" 
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text"
                name=" country" 
                id=' country'
                placeholder=' Country'
                className="form-control"
                value={ country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor=' country' className="labText"> country</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            </React.Fragment>
          ):(
            <React.Fragment>
              <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='qualiobtained'
                name="qualiobtained" 
                placeholder='Qualification'
                className="form-control" 
                value={qualiobtained}
                onChange={(e) => setQualiobtained(e.target.value)} 
                />
                <label htmlFor='qualiobtained' className="labText">Qualification</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='institution'
                name="institution" 
                placeholder='Name of Institution'
                className="form-control" 
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                />
                <label htmlFor='institution' className="labText">Name of Institution</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='startdate'
                name="startdate" 
                placeholder='Start Date'
                className="form-control" 
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
               
                name="enddate" 
                placeholder='End Date'
                className="form-control" 
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                />
                
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group"></div>
                
                <div className="input_parent">
                <input
                type="text"
                name=" country" 
                id=' country'
                placeholder=' Country'
                className="form-control"
                value={ country}
                onChange={(e) => setCountry(e.target.value)}
                />
                <label htmlFor=' country' className="labText"> country</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            </React.Fragment>
          )}
            
    
  <div className="form-group-submit-parent">
    {eduqualid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateEduQuali} />
    ):(
      <input type="submit" className="btn_submit" value="Send"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your Qualification Was added Successfully</p>
        ) : (
          <p className="text-danger">Your Qualification Was added</p>
        )}
        </form>
    </div>
  );
}