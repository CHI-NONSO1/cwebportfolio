import React, { useState,useEffect } from 'react';
import "./Goal.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';




export default function BioData() {
  const [sex, setSex] = useState('Gender')
  const [dob, setDob] = useState('');
  const [soo, setSoo] = useState('');
  const [marital, setMarital] = useState('');
  const [impairment, setImpairment] = useState('');
  const [religion, setReligion] = useState();
  const [nationality, setNationality] = useState("");
  const [portfolioid, setPortfolioid] = useState('');
  const [send, setSend] = useState('');
 

  const history = useNavigate();

  const {biodataid} = useParams();
  
  const changeGender = (newGender) => {
    setSex(newGender)
  }
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
      url: "http://localhost:5000/biodata",
      data: {
        sex,
        dob,
        soo,
        marital,
        impairment,
        religion,
        nationality,
        portfolioid
      },
      
    };
    setSex('')
      setDob('')
      setSoo('')
      setMarital('')
      setImpairment('')
      setReligion('')
      setNationality('')
      
    axios(configuration)
    .then((result) => {
      setSend(true);
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updateBiodata = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/biodata/${biodataid}`,{
      sex,
      dob,
      soo,
      marital,
      impairment,
      religion,
      nationality,
      portfolioid
    })
    .then((result) => {
      setSex('')
      setDob('')
      setSoo('')
      setMarital('')
      setImpairment('')
      setReligion('')
      setNationality('')
      setSend(true);
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getBiodataById = async () => {
  const res =  await axios.get(`http://localhost:5000/biodata/one/${biodataid}`)
    setSex(res.data.sex);
    setDob(res.data.dob);
    setSoo(res.data.soo);
    setMarital(res.data.marital);
    setImpairment(res.data.impairment);
    setReligion(res.data.religion);
    setNationality(res.data.nationality);
  
  }
  
  getBiodataById();
}, [biodataid]);


  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
 
  return(


    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Fill Your BioData</h2>
        </div>
        <form  method="post" encType="multipart/form-data">
          {biodataid ? (
            <React.Fragment>
  <div className="form-group-parent1">
  
  <div className="input_parent">
    <select 
    onChange={(event) => changeGender(event.target.value)}
    value={sex}
    >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
    </select>
    </div>

    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
  <div className="form-group "></div>
    
    <div className="input_parent">
    <input
    type="text"
    id='dob'
    name="dob" 
    placeholder='Date of Birth'
    className="form-control" 
   
    value={dob}
    onChange={(e) => setDob(e.target.value)}
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
    id='soo'
    name="soo" 
    placeholder='State Of Origen'
    className="form-control" 
    value={soo}
    onChange={(e) => setSoo(e.target.value)} 
    />
    <label htmlFor='soo' className="labText">State Of Origen</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="marital" 
    id='marital'
    placeholder='Marital Status'
    className="form-control"
    value={marital}
    onChange={(e) => setMarital(e.target.value)}
    />
    <label htmlFor='marital' className="labText">Marital Status</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="impairment" 
    id='impairment'
    placeholder='Health Impairment'
    className="form-control"
    value={impairment}
    onChange={(e) => setImpairment(e.target.value)}
    />
    <label htmlFor='impairment' className="labText">Health Impairment</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="religion" 
    id='religion'
    placeholder='Religion'
    className="form-control"
    value={religion}
    onChange={(e) => setReligion(e.target.value)}
    />
    <label htmlFor='religion' className="labText">Religion</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="nationality" 
    id='nationality'
    placeholder='Nationality'
    className="form-control"
    value={nationality}
    onChange={(e) => setNationality(e.target.value)}
    />
    <label htmlFor='marital' className="labText">Nationality</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>
            </React.Fragment>
          ):(
            <React.Fragment>
                <div className="form-group-parent1">
  
  <div className="input_parent">
    <select 
    onChange={(event) => changeGender(event.target.value)}
    
    // {...biodataItems.map(bio => (
    //   value={bio.sex}
    // ))}
    >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
    </select>
    </div>

    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
  <div className="form-group "></div>
    
    <div className="input_parent">
    <input
    type="text"
    id='dob'
    name="dob" 
    placeholder='Date of Birth'
    className="form-control" 
    value={dob}
    onChange={(e) => setDob(e.target.value)}
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
    id='soo'
    name="soo" 
    placeholder='State Of Origen'
    className="form-control" 
    value={soo}
    onChange={(e) => setSoo(e.target.value)} 
    />
    <label htmlFor='soo' className="labText">State Of Origen</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="marital" 
    id='marital'
    placeholder='Marital Status'
    className="form-control"
    value={marital}
    onChange={(e) => setMarital(e.target.value)}
    />
    <label htmlFor='marital' className="labText">Marital Status</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="impairment" 
    id='impairment'
    placeholder='Health Impairment'
    className="form-control"
    value={impairment}
    onChange={(e) => setImpairment(e.target.value)}
    />
    <label htmlFor='impairment' className="labText">Health Impairment</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="religion" 
    id='religion'
    placeholder='Religion'
    className="form-control"
    value={religion}
    onChange={(e) => setReligion(e.target.value)}
    />
    <label htmlFor='religion' className="labText">Religion</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text"
    name="nationality" 
    id='nationality'
    placeholder='Nationality'
    className="form-control"
    value={nationality}
    onChange={(e) => setNationality(e.target.value)}
    />
    <label htmlFor='marital' className="labText">Nationality</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>
            </React.Fragment>
          )}
          

    
  <div className="form-group-submit-parent">
    {biodataid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updateBiodata} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  <input type="reset" className="btn-reset" value="Reset" />
  </div>


        {send ? (
          <p className="text-success">Your Entries Was Saved Successfully</p>
        ) : (
          <p className="text-danger">Your Entries Was not Saved</p>
        )}
        </form>
    </div>
  );
}
