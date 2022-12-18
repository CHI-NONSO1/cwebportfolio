import React, { useState,useEffect } from 'react';
//import { Link } from 'react-router-dom';
// import useToken from '../App/useToken';
// import Login from '../Login/Login';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function WorkExperence() {
  const [organisation, setOrganisation] = useState('');
  const [position, setPosition] = useState('');
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [country, setCountry] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
 
  const [sent, setSent] = useState();
  
  const {workexperienceid} = useParams();
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
      url: "http://localhost:5000/addworkexperience",
      data: {
        organisation,
        position,
        startdate,
        enddate,
        country,
        portfolioid
      },
      
    };
    setOrganisation('')
      setPosition('')
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

  const updateWorkexperience = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/workexperience/${workexperienceid}`,{
      organisation,
      position,
      startdate,
      enddate,
      country,
      portfolioid
    })
    .then((result) => {
      setOrganisation('')
      setPosition('')
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
  

  const getWorkexperienceById = async () => {
    const response = await axios.get(`http://localhost:5000/workexperience/one/${workexperienceid}`);
    setOrganisation(response.data.organisation)
      setPosition(response.data.position)
      setStartdate(response.data.startdate)
      setEnddate(response.data.enddate)
      setCountry(response.data.country)
  
  }
  
  getWorkexperienceById();
}, [workexperienceid]);



  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Organisation Worked</h2>
        </div>
       
        <form  method="post" encType="multipart/form-data">
       {workexperienceid ? 
       (<React.Fragment>
     <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='organisation'
                name="organisation" 
                placeholder='Organisation'
                className="form-control" 
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)} 
                />
                <label htmlFor='organisation' className="labText">Organisation</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='position'
                name="position" 
                placeholder='Position Held'
                className="form-control" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
                <label htmlFor='position' className="labText">Position Held</label>
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
       </React.Fragment>):(
       <React.Fragment>
     <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input 
                type="text" 
                id='organisation'
                name="organisation" 
                placeholder='Organisation'
                className="form-control" 
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)} 
                />
                <label htmlFor='organisation' className="labText">Organisation</label>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="input_parent">
                <input
                type="text"
                id='position'
                name="position" 
                placeholder='Position Held'
                className="form-control" 
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                />
                <label htmlFor='position' className="labText">Position Held</label>
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
       </React.Fragment>)}
    
  <div className="form-group-submit-parent">
    {workexperienceid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateWorkexperience} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {sent ? (
          <p className="text-success">Your work Experence Was sent Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>
  );
}