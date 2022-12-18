import React, { useState, useEffect } from 'react';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function Goal() {
  const [mygoal, setMygoal] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [goal, setGoal] = useState(false);
 
  const {goalid} = useParams();
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
      url: "http://localhost:5000/goal",
      data: {
        mygoal,
        portfolioid
      }
    };
    setMygoal('')
    
    axios(configuration)
    .then((result) => {
      setGoal(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updateGoal = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/goal/${goalid}`,{
      mygoal,
      portfolioid
    })
    .then((result) => {
      setMygoal('')
      setGoal(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}

useEffect(() => {

  const getGoalById = async () => {
    const response = await axios.get(`http://localhost:5000/goal/one/${goalid}`);
    setMygoal(response.data.mygoal);
  
  }
  
  getGoalById();
}, [goalid]);





  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Goal</h2>
        </div>
        <div className="paraparent">
            <p className="para_details">Please fill this form to add goals.</p>
        </div>
        <form  method="post" encType="multipart/form-data">
            <div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
                  
                  {goalid? (
                    <>
                     <textarea
                     name="mygoal"
                      form="mygoal" 
                      id="mygoal__label"
                       required placeholder= "Write Your Goal Here"
                       value={mygoal}
                       onChange={(e) => setMygoal(e.target.value)}
                       ></textarea>
                    <label htmlFor="mygoal__label" className="form__label">Update Your Goal</label>
                    </>
                  ):(
                    <>
                    <textarea
                    name="mygoal"
                     form="mygoal" 
                     id="mygoal__label"
                      required placeholder="Write Your Goal Here"
                      value={mygoal}
                      onChange={(e) => setMygoal(e.target.value)}
                      ></textarea>
                   <label htmlFor="mygoal__label" className="form__label">Your Goal Here</label>
                   </>
                  )}
           
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

         
    
  <div className="form-group-submit-parent">
    {goalid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateGoal} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  

  <input type="reset" className="btn-reset" value="Reset" />
  </div>


     
        {goal ? (
          <p className="text-success">Your Goal Was sent Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>
  );
}